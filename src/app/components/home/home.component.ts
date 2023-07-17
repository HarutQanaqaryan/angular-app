import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/models/products';
import { ProductService } from 'src/app/services/products.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  products: IProduct[] = [];
  loading = false;
  errorMessage = '';
  constructor(private productsService: ProductService) {}

  ngOnInit(): void {
    this.loading = true;
    this.productsService.getProducts().subscribe(
      (res) => {
        this.products = res;
        this.loading = false;
      },
      (err) => {
        this.errorMessage = err.error;
        this.loading = false;
      }
    );
  }
}
