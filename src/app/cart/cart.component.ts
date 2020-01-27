import { Component, OnInit } from '@angular/core';
import { CustomerdataService } from '../customerdata.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  products:any;
  productId="";
  total=0;
  orders={"username":"","amount":""};
  constructor(private router: Router,private service:CustomerdataService) { }

  ngOnInit() {
    
    let username=localStorage.getItem("CustomerDetails");
    console.log(username);
    let ObRes=this.service.getProductData(username);
    ObRes.subscribe((result)=>{
      this.products=result;
      for (let index = 0; index < this.products.length; index++) {
        this.total = this.total + this.products[index].mrp;
        
      }
     
    });
  }

  EmptyTheCart()
  {
    

    let username=localStorage.getItem("CustomerDetails");
    console.log(username);
    let ObRes=this.service.EmptyTheCart(username);
    ObRes.subscribe((result)=>{
      console.log(result);

    });

    this.orders.username=username;
    this.orders.amount=this.total.toFixed();

    let observableResult= this.service.SaveOrderObject(this.orders);

    observableResult.subscribe((data)=>{
      console.log(data);
      
     });


    this.router.navigate(['/payment']);


  }

}
