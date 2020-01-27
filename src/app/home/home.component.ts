import { Component, OnInit } from '@angular/core';
import { AdmindataService } from '../admindata.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  products:any;
  constructor(private service:AdmindataService) { }

  ngOnInit() {
    //let ObRes=this.service.getProductData();
    //ObRes.subscribe((result)=>{
     // console.log(result);
      //this.products=result;
    //});
  }
}
