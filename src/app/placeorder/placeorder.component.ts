import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerdataService } from '../customerdata.service';

@Component({
  selector: 'app-placeorder',
  templateUrl: './placeorder.component.html',
  styleUrls: ['./placeorder.component.css']
})
export class PlaceorderComponent implements OnInit {
  productId="";
  product:any;
  orders={"username":"","amount":""};
  //product={"productId":"","productName":"","mrp":"","description":"","category":""};
  constructor(private route:ActivatedRoute,
    private router:Router,
    private service:CustomerdataService) { }

  ngOnInit() {

    this.route.paramMap.subscribe((result)=>{
      let No = result.get("productId");
      
      let observableResult= this.service.selectByProductId(No);

      observableResult.subscribe((data)=>{
         console.log(data);
         this.product=data;
         this.orders.amount=this.product.mrp;
         this.orders.username=localStorage.getItem("CustomerDetails");
         console.log(this.product.category);
         this.productId=this.product.productId;
         

      });
    });

    let observableResult= this.service.DecrementProductQuantity(this.productId);

    observableResult.subscribe((data)=>{
      console.log(data);
      
     });


  }

  Payment()
  {
    let observableResult= this.service.SaveOrderObject(this.orders);

    observableResult.subscribe((data)=>{
      console.log(data);
      
     });

     this.router.navigate(["/payment"]);
   
  }

}
