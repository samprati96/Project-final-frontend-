import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdmindataService {

  baseUrl="http://localhost:8080/OnlineShop/admin";

  constructor(public http:HttpClient) {

  }

   getVendorData(){

    return this.http.get(this.baseUrl+"/vendors");

   }

   getCustomerData(){

    return this.http.get(this.baseUrl+"/customers");

   }

   getProductData(){

    return this.http.get(this.baseUrl+"/products");

   }
   getAdminRecordData(){

    return this.http.get(this.baseUrl+"/adminRecord");

   }

 
}
