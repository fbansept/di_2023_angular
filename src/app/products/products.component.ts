import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent {
  productList: any[] = [];

  constructor(private http: HttpClient) {
    this.http
      .get('http://localhost:8080/products')
      .subscribe((productList: any) => (this.productList = productList));
  }

  onDeleteProduct(id: number) {
    this.http
      .delete('http://localhost:8080/admin/product/' + id)
      .subscribe((response) => console.log(response));
  }
}
