import { Component, Input } from '@angular/core';
import { IProduct } from 'src/app/models/products';

@Component({
  selector: 'ui-product',
  templateUrl: './ui-product.component.html',
  styleUrls: ['./ui-product.component.scss'],
})
export class ProductComponent {
  @Input() product: IProduct;
  isDetail = false;
}
