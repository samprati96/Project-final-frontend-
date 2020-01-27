import { Component, OnInit } from '@angular/core';
import { AdmindataService } from '../admindata.service';

@Component({
  selector: 'app-vendorlist',
  templateUrl: './vendorlist.component.html',
  styleUrls: ['./vendorlist.component.css']
})
export class VendorlistComponent implements OnInit {

  vendors:any;
  constructor(private service:AdmindataService) { }

  ngOnInit() {
    let ObRes=this.service.getVendorData();
    ObRes.subscribe((result)=>{
      this.vendors=result;
    });
  }

}
