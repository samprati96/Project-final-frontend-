import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ValidatedataService {

  constructor(public http:HttpClient) { }

  SelectCustomer(username)
  {
  return  this.http.get("http://localhost:8080/OnlineShop/customer/validate/"+username);
  }

  SelectVendor(username)
  {
  return  this.http.get("http://localhost:8080/OnlineShop/vendor/validate/"+username);
  }


}
