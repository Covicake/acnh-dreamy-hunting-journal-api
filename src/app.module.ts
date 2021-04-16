import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UsersModule } from './users/users.module';
import { GCloudStorageModule } from '@aginix/nestjs-gcloud-storage';
import { ColorsModule } from './colors/colors.module';
import { PersonalitiesModule } from './personalities/personalities.module';
import { StylesModule } from './styles/styles.module';
import { SpeciesModule } from './species/species.module';
import { HobbiesModule } from './hobbies/hobbies.module';
import { VillagersModule } from './villagers/villagers.module';

@Module({
  imports: [
    MikroOrmModule.forRoot(),
    GCloudStorageModule.withConfig({
      defaultBucketname: 'dreamie-hunting-bucket',
      storageBaseUri: '/dreamie-hunting-bucket',
      predefinedAcl: 'authenticatedRead',
    }),
    VillagersModule,
    UsersModule,
    ColorsModule,
    PersonalitiesModule,
    StylesModule,
    SpeciesModule,
    HobbiesModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
