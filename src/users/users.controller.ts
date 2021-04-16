import { GCloudStorageFileInterceptor, UploadedFileMetadata } from "@aginix/nestjs-gcloud-storage";
import { Body, Controller, Delete, Get, Param, Patch, Post, UploadedFile, UseInterceptors, UsePipes, ValidationPipe } from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { multerConfig } from "src/utils/multer";
import { CreateUserDto } from "./dto/CreateUser.dto";
import { UpdateUserDto } from "./dto/UpdateUser.dto";
import { UsersService } from "./users.service";

@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService) {}

    @Get()
    getUsers() {
        return this.userService.getUsers()
    }

    @Get(':id')
    getUser(@Param('id') id: string) {
        return this.userService.getUser(id)
    }

    @Post()
    @UseInterceptors(
        GCloudStorageFileInterceptor('file'),
      )
    @UsePipes(ValidationPipe)
    createUser(@Body() userData: CreateUserDto, @UploadedFile() file: UploadedFileMetadata) {
        const fileUrl = file?.storageUrl ? `https://storage.googleapis.com${file.storageUrl.replace(/\\/g, '/')}` : undefined
        console.log(fileUrl)
        return this.userService.createUser(userData, fileUrl)
    }

    @Delete(':id')
    deleteUser(@Param('id') id: string) {
        return this.userService.deleteUser(id)
    }

    @Patch(':id')
    @UseInterceptors(FileInterceptor('avatar', multerConfig))
    @UsePipes(ValidationPipe)
    updateUser(@Param('id') id, @Body() userData: UpdateUserDto, @UploadedFile() avatar: Express.Multer.File) {
        return this.userService.updateUser(id, userData, avatar?.filename)
    }
}