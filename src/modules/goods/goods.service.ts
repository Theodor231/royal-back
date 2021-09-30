import { BadRequestException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ILike, Repository } from "typeorm";
import { Goods } from "./entities/goods.entity";
import { LocalizationService } from "../../services/localization.service";
import { APIModel } from "src/models/api-model.service";
import { CreateGoodsDto } from "./dto/create-goods.dto";
import { UpdateGoodsDto } from "./dto/update-goods.dto";

@Injectable()
export class GoodsService extends APIModel {
  headers = [
    { value: "id", text: "ID", sortable: true },
    { value: "name_ro", text: "Name RO", sortable: true },
    { value: "name_en", text: "Name EN", sortable: true },
    { value: "name_ru", text: "Name RU", sortable: true },
    { value: "image", text: "Image", sortable: true },
    { value: "price", text: "Price", sortable: true },
    { value: "discount", text: "Discount", sortable: true },
  ] as Array<{ value: string; text: string; sortable: boolean }>;

  allowedFilters = {
    name_ro: {
      type: "string",
    },
    name_en: {
      type: "string",
    },
    name_ru: {
      type: "string",
    },
    price: {
      type: "string",
    },
    discount: {
      type: "string",
    },
  } as any;

  constructor(
    @InjectRepository(Goods)
    public repository: Repository<Goods>,
    public localizationService: LocalizationService
  ) {
    super(repository, localizationService);
    this.createDto = CreateGoodsDto;
    this.updateDto = UpdateGoodsDto;
  }

  async findOnePublic(id: number): Promise<any> {
    try {
      const item = await this.repository.findOne(id);

      const items = await this.repository
        .createQueryBuilder()
        .select([
          `goods.name_${this.localizationService.activeLanguage}`,
          "goods.id",
          "goods.price",
          "goods.discount",
          "goods.image",
        ])
        .from(Goods, "goods")
        .where(`goods.categoryId=${item.categoryId}`)
        .orderBy("RANDOM()")
        .limit(5)
        .getMany();

      return {
        items: items.map((el: any) => {
          el.image_url = el.image?.url || "";
          el.name = el[`name_${this.localizationService.activeLanguage}`];
          delete el[`name_${this.localizationService.activeLanguage}`];
          delete el.image;
          return el;
        }),
        name: item[`name_${this.localizationService.activeLanguage}`],
        description:
          item[`description_${this.localizationService.activeLanguage}`],
        price: item.price,
        discount: item.discount,
        width: item.width,
        height: item.height,
        length: item.length,
        categoryId: item.categoryId,
        image_url: item.image.url,
      };
    } catch (e) {
      throw new BadRequestException(e);
    }
  }

  async findAllPublic(categoryId, query): Promise<any> {
    const take = query.per_page || 10;
    const skip = (Number(query.page) - 1) * take || 0;

    const where = { categoryId } as any;

    if (query.filter) {
      const filter = JSON.parse(query.filter);

      if (filter.name_ro) {
        where.name_ro = ILike(`%${filter.name_ro.toLowerCase()}%`);
      }

      if (filter.name_en) {
        where.name_en = ILike(`%${filter.name_en.toLowerCase()}%`);
      }

      if (filter.name_ru) {
        where.name_ru = ILike(`%${filter.name_ru.toLowerCase()}%`);
      }
    }

    const [result, total] = await this.repository.findAndCount({
      take: take,
      skip: skip,
      where,
    });

    return {
      total,
      items: result.map((item: any) => ({
        name: item[`name_${this.localizationService.activeLanguage}`],
        price: item.price,
        discount: item.discount,
        width: item.width,
        height: item.height,
        length: item.length,
        categoryId: item.categoryId,
        image_url: item.image.url,
        id: item.id,
      })),
      page: Number(query.page) | 1,
    };
  }
}
