import { Controller, Get, Param, Query } from "@nestjs/common";
import { CategoriesService } from "./categories.service";
import { Pagination } from "nestjs-typeorm-paginate";
import { Categories } from "./entities/categories.entity";
import { Public } from "src/helpers/decorators";
import { ModelController } from "../../models/model.controller";

@Controller("categories")
export class CategoriesController extends ModelController {
  constructor(private readonly categoriesService: CategoriesService) {
    super(categoriesService, {
      filePath: "categories",
    });
  }

  @Get("public")
  @Public()
  async findAllPublic(@Query() query): Promise<Pagination<Categories>> {
    return this.categoriesService.findAllPublic(query);
  }

  @Get("public/:id/edit")
  @Public()
  findOnePublic(@Param("id") id: string) {
    return this.categoriesService.findOnePublic(+id);
  }

  @Get("public/list")
  @Public()
  publicList() {
    return this.categoriesService.publicList();
  }
}
