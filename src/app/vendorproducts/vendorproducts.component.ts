import { Component, OnInit } from '@angular/core';
import { VendordataService } from '../vendordata.service';

@Component({
  selector: 'app-vendorproducts',
  templateUrl: './vendorproducts.component.html',
  styleUrls: ['./vendorproducts.component.css']
})
export class VendorproductsComponent implements OnInit {

  products:any;
  constructor(private service:VendordataService) { }

  ngOnInit() {
   let username= localStorage.getItem("VendorDetails");
    console.log(username);
    let ObRes=this.service.getProducts(username);
    ObRes.subscribe((result)=>{
      this.products=result;
    });
  }

}
