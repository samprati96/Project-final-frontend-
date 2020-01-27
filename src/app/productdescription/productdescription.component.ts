import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerdataService } from '../customerdata.service';

@Component({
  selector: 'app-productdescription',
  templateUrl: './productdescription.component.html',
  styleUrls: ['./productdescription.component.css']
})
export class ProductdescriptionComponent implements OnInit {
  productId="";
  product:any;
  cart={"productId":"","username":""};
 // product={"productId":"","productName":"","mrp":"","description":"","category":""};
  constructor(private route:ActivatedRoute,
    private router:Router,
    private service:CustomerdataService) { }

  ngOnInit() {

    this.route.paramMap.subscribe((result)=>{
      let No = result.get("productId");
      this.productId=No;
     console.log(No);
      let observableResult= this.service.selectByProductId(No);

      observableResult.subscribe((data)=>{
         console.log(data);
         this.product=data;
         //this.product=data.valueOf();
         console.log(this.product.category);
         this.productId=this.product.productId;
         

      });
    });


  }

  InsertIntoCart()
  {
    let username=localStorage.getItem("CustomerDetails");
    this.cart.productId=this.productId;
    this.cart.username=username;
    console.log(this.cart);


    let ObRes=this.service.insertIntoCart(this.cart);
    ObRes.subscribe((result)=>{
      console.log(result);
      
      
    });

    this.router.navigate(["/home"]);

  }


}
