import { Controller } from "@nestjs/common";
import { RolesService } from "./roles.service";
import { ApiTags } from "@nestjs/swagger";
import { ModelController } from "src/models/model.controller";

@ApiTags("Roles")
@Controller("roles")
export class RolesController extends ModelController {
  constructor(private readonly rolesService: RolesService) {
    super(rolesService, {});
  }
}
