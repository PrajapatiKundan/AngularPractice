import { Product } from './../../models/product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  searchData : string = "";
  products: Product[] = [
    {
      name: "Alienware",
      code: 1,
      branchName: "Branch 1",
      branchCode: 100,
      shippingAddress: "Address 1",
      imgUrl: "assets/images/alienware.jpg"
    },
    {
      name: "Samsung m21",
      code: 2,
      branchName: "Branch 2",
      branchCode: 101,
      shippingAddress: "Address 2",
      imgUrl: "assets/images/m21.jpg"
    },
    {
      name: "Iphone 12",
      code: 3,
      branchName: "Branch 3",
      branchCode: 102,
      shippingAddress: "Address 3",
      imgUrl: "assets/images/iphone12.jpg"
    }
  ]
  constructor() { }

  ngOnInit(): void {
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
