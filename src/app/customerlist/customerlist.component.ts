import { Component, OnInit } from '@angular/core';
import { AdmindataService } from '../admindata.service';

@Component({
  selector: 'app-customerlist',
  templateUrl: './customerlist.component.html',
  styleUrls: ['./customerlist.component.css']
})
export class CustomerlistComponent implements OnInit {

  customers:any;
  constructor(private service:AdmindataService) { }

  ngOnInit() {
    let ObRes=this.service.getCustomerData();
    ObRes.subscribe((result)=>{
      this.customers=result;
    });
  }
}
