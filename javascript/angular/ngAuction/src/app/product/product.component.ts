import { Component, OnInit } from '@angular/core';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-product',
  template: `
    <p>
      product works!
      {{ title }}
    </p>
  `,
  styles: []
})
export class ProductComponent implements OnInit {
  title: string;
  constructor(productService: ProductService) {
    productService.getData();
  }

  ngOnInit() {}
}
