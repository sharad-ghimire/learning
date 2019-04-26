import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemsController } from './items/items.controller';
import { ItemsModule } from './items/items.module';
import { ItemsService } from './items/items.service';
import config from './config/keys';
// Meeting place for all our services and modules

@Module({
  imports: [MongooseModule.forRoot(config.mongoURI), ItemsModule],
  controllers: [AppController, ItemsController],
  providers: [AppService, ItemsService],
})
export class AppModule {}
