import { EntityRepository } from '@mikro-orm/mysql';
import { InjectRepository } from '@mikro-orm/nestjs';
import { Injectable, NotFoundException } from '@nestjs/common';
import { wrap } from 'mikro-orm';
import { CreateUserDto } from './dto/CreateUser.dto';
import { UpdateUserDto } from './dto/UpdateUser.dto';
import { User } from './users.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: EntityRepository<User>,
  ) {}

  async getUsers() {
    return await this.userRepository.findAll();
  }

  async getUser(id: string) {
    return await this.findUser(id);
  }

  createUser(userData: CreateUserDto, avatarPath: string) {
    const user = new User(userData.name, userData.nickName, avatarPath);
    this.userRepository.persistAndFlush(user);

    return user;
  }

  async updateUser(id: string, userData: UpdateUserDto, avatarPath: string) {
    const user = await this.findUser(id);
    wrap(user).assign({ ...userData, avatar: avatarPath });
    this.userRepository.flush();

    return user;
  }

  deleteUser(id: string) {
    this.userRepository.nativeDelete({ uuid: id });
  }

  private async findUser(id: string) {
    const user = await this.userRepository.findOne({ uuid: id });
    if (!user) {
      throw new NotFoundException(`No user found for ${id}`);
    }
    return user;
  }
}
