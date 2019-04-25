import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';

// Decorator -> metadata
@Controller('items')
export class ItemsController {
  @Get()
  findAll(): string {
    return 'Get all Items';
  }

  @Get(':id')
  findOne(@Param('id') id): string {
    return `Item: ${id}`;
  }

  @Post()
  create(@Body() createItemDto: CreateItemDto): string {
    return `Name: ${createItemDto.name} and Desc: ${createItemDto.description}`;
  }

  @Delete(':id')
  delete(@Param('id') id): string {
    return `Deleted item : ${id}`;
  }

  @Put(':id')
  update(@Body() updateItemDto: CreateItemDto, @Param('id') id): string {
    return `Update ${id} - Name:${updateItemDto.name}`;
  }
}
