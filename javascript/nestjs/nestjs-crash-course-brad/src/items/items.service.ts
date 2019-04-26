import { Injectable } from '@nestjs/common';
import { Item } from './interfaces/item.interface';
@Injectable()
export class ItemsService {
  private readonly items: Item[] = [
    {
      id: '1',
      name: 'Item 1',
      description: 'Description of 1',
      qty: 200,
    },
    {
      id: '2',
      name: 'Item 2',
      description: 'Description of 2',
      qty: 300,
    },
  ];

  findAll(): Item[] {
    return this.items;
  }

  findOne(id: string): Item {
    return this.items.find(item => item.id === id);
  }
}
