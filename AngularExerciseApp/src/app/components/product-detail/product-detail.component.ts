import { ProductsService } from './../../services/products.service';
import { Product } from './../../models/product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  searchData : string = "";
  products: Product[] = [];
  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.productsService.getProducts().subscribe( (productsList) => {
      console.log(productsList);
      this.products = (<Product[]>productsList);
    })
  }

  handleClick(product: Product){
    alert(
      "\nProduct Name: " + product.name +
      "\nProduct Code: " + product.code +
      "\nBranch Name: " + product.branchName +
      "\nBranch Code: " + product.branchCode +
      "\nShipping Address: " + product.shippingAddress
    )
  }
}
