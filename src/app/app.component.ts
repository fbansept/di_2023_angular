import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  productList: any[] = [];

  constructor(private http: HttpClient) {
    this.http
      .get('http://localhost:8080/products')
      .subscribe((productList: any) => 
          this.productList = productList);
  }
}
