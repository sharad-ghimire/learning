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
import { ItemsService } from './items.service';
import { Item } from './interfaces/item.interface';

// Decorator -> metadata
@Controller('items')
export class ItemsController {
  // Dependency Injection
  constructor(private readonly itemsService: ItemsService) {}
  @Get()
  async findAll(): Promise<Item[]> {
    return this.itemsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id): Promise<Item> {
    return this.itemsService.findOne(id);
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
