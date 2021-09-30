import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  UploadedFile,
  Header,
} from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { Pagination } from "nestjs-typeorm-paginate";
import { User } from "./entities/user.entity";
import { SaveFile } from "../../helpers/decorators";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { ModelController } from "src/models/model.controller";

@ApiTags("Users")
@Controller("users")
export class UsersController extends ModelController {
  constructor(private readonly usersService: UsersService) {
    super(usersService, { filePath: "users", fileKey: "avatar" });
  }
}
