import { Component, OnInit } from '@angular/core';
import { AdmindataService } from '../admindata.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {

  products:any;
  constructor(private service:AdmindataService) { }

  ngOnInit() {
    let ObRes=this.service.getProductData();
    ObRes.subscribe((result)=>{
      this.products=result;
    });
  }
}
