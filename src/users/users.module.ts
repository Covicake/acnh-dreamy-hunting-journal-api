import { MikroOrmModule } from "@mikro-orm/nestjs";
import { Module } from "@nestjs/common";
import { UsersController } from "./users.controller";
import { User } from "./users.entity";
import { UsersService } from "./users.service";

@Module({
    imports: [MikroOrmModule.forFeature({entities: [User]})],
    controllers: [UsersController],
    providers: [UsersService],
  })
export class UsersModule {}