import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ProductComponent } from './product/product.component';
import { AppComponent } from './app.component';
import { SingleProductComponent } from './product/single-product/single-product.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductRepository } from "./product/product.repository";

@NgModule({
  declarations: [
      AppComponent,
      ProductComponent,
      SingleProductComponent
  ],
  imports: [
      BrowserModule, ReactiveFormsModule
  ],
  providers: [ProductRepository],
  bootstrap: [AppComponent]
})
export class AppModule { }
