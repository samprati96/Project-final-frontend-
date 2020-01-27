import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerdataService {

  constructor(public http:HttpClient) { }

  insert(customerObj)
  {
    return  this.http.post("http://localhost:8080/OnlineShop/customer/registercustomer",customerObj);
  }

  update(customerObj)
  {
    return  this.http.put("http://localhost:8080/OnlineShop/customer",customerObj);
  }

  SelectByUsername(username)
  {
    console.log("Customerdataservice :"+username);
    return  this.http.get("http://localhost:8080/OnlineShop/customer/validate/"+username);
  
  }

  DeleteByUsername(username)
  {
    return  this.http.delete("http://localhost:8080/OnlineShop/customer/"+username);

  }

  selectByProductId(productId)
  {
    return  this.http.get("http://localhost:8080/OnlineShop/customer/product/"+productId);
  }

  insertIntoCart(cart)
  {
    console.log("insertIntoCart: dataservice");
    console.log(cart);
    return  this.http.post("http://localhost:8080/OnlineShop/customer/cart",cart);  
  }

  getProductData(username)
  {
    return  this.http.get("http://localhost:8080/OnlineShop/customer/cart/"+username);
  }

  RemoveByProductId(No)
  {
    return  this.http.delete("http://localhost:8080/OnlineShop/customer/remove/"+No);
 
  }

  EmptyTheCart(username)
  {
    return  this.http.delete("http://localhost:8080/OnlineShop/customer/removeall/"+username);
 
  }

  DecrementProductQuantity(No)
  {
    return  this.http.get("http://localhost:8080/OnlineShop/customer/decrement/"+No);

  }
  SaveOrderObject(orderObj)
  {
    return  this.http.post("http://localhost:8080/OnlineShop/customer/order",orderObj);  
   
  }

}
