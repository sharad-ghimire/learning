export class CreateItemDto {
  readonly name: string;
  readonly description: string;
  readonly qty: number;
}

// A DTO is an object that defines how the data *will be sent over the
// network. We could determine the DTO schema by using TypeScript
// interfaces, or by simple classes.
