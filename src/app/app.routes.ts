import { Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  { path: 'products', component: ProductsComponent },
  { path: 'login', component: LoginComponent },
];
