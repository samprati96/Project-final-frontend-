import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerdataService } from '../customerdata.service';

@Component({
  selector: 'app-removeproduct',
  templateUrl: './removeproduct.component.html',
  styleUrls: ['./removeproduct.component.css']
})
export class RemoveproductComponent implements OnInit {
  productId="";
  product:any;
  //product={"productId":"","productName":"","mrp":"","description":"","category":""};
  constructor(private route:ActivatedRoute,
    private router:Router,
    private service:CustomerdataService) { }

  ngOnInit() {

    this.route.paramMap.subscribe((result)=>{
      let No = result.get("productId");
      
      let observableResult= this.service.RemoveByProductId(No);

      observableResult.subscribe((data)=>{
         console.log(data);         

      });
    });


  }

}
