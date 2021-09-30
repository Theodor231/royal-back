import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { validateOrReject } from 'class-validator';
import { ValidationException } from 'src/exceptions/validation.exception';
import { ILike, Repository } from 'typeorm';
import { LocalizationService } from '../services/localization.service';

@Injectable()
export class APIModel {
  headers = [] as Array<{ value: string; text: string }>;
  allowedFilters = {} as any;
  constructor(
    public repository: Repository<any>,
    public languageService: LocalizationService,
  ) {}

  async create(payload: any) {
    try {
      const categories = this.repository.create(payload);
      return this.repository.save(categories);
    } catch (e) {
      throw new InternalServerErrorException(e);
    }
  }

  async findOne(id: number) {
    try {
      return await this.repository.findOne(id);
    } catch (e) {
      throw new InternalServerErrorException(e);
    }
  }

  async list() {
    try {
      const items = await this.repository.find();
      return items.map((item: any) => ({
        value: item.id,
        text: item[`name_${this.languageService.activeLanguage}`],
      }));
    } catch (e) {
      throw new InternalServerErrorException(e);
    }
  }

  async findOnePublic(id: number) {
    try {
      return await this.repository.findOne(id);
    } catch (e) {
      throw new NotFoundException(e);
    }
  }

  async findAll(query): Promise<any> {
    const take = query.per_page || 10;
    const skip = (Number(query.page) - 1) * take || 0;
    let where;

    if (query.filter) {
      const filter = JSON.parse(query.filter);
      where = this.getFilters(filter);
    }

    let order;

    if (query.order) {
      order = JSON.parse(query.order);
    }

    const [result, total] = await this.repository.findAndCount({
      take: take,
      skip: skip,
      where,
      order,
    });

    return {
      headers: this.headers,
      total,
      items: result,
      page: query.page,
    };
  }

  async update(id: number, payload: any) {
    try {
      await this.repository.findOneOrFail(+id);
      await this.repository.update(+id, JSON.parse(JSON.stringify(payload)));
      return this.repository.findOne(id);
    } catch (e) {
      return new NotFoundException(e);
    }
  }

  async remove(id: number) {
    try {
      return await this.repository.delete(id);
    } catch (e) {
      throw new InternalServerErrorException(e);
    }
  }

  getFilters(filter: any): any {
    const where = {} as any;
    for (const key in filter) {
      if (this.allowedFilters[key]) {
        if (this.allowedFilters[key].type === 'string') {
          where[key] = ILike(`%${filter[key].toLowerCase()}%`);
        }
      } else {
        throw new UnprocessableEntityException({
          message: `Filter '${key}' is not allowed. Allowed filter '${Object.keys(
            this.allowedFilters,
          ).join("', '")}'`,
        });
      }
    }
    return where;
  }

  async validateRequest(payload, dto) {
    const model = new dto()
    for (const key in payload) {
      model[key] = payload[key];
    }

    try {
      await validateOrReject(model);
    } catch (e) {
      const messages = {} as any;
      e.forEach((err: any) => {
        messages[err.property] =
          err.constraints[Object.keys(err.constraints)[0]];
        return err;
      });

      throw new ValidationException(messages);
    }
  }
}
