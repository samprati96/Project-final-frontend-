import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VendordataService {

  constructor(public http:HttpClient) { }

  insert(vendorObj)
  {
    return  this.http.post("http://localhost:8080/OnlineShop/vendor/registervendor",vendorObj);
  }

  // insertProduct(prodObj,vendor_id)
  // {
    
  //   return  this.http.post("http://localhost:8080/OnlineShop/vendor/addproduct/"+vendor_id,prodObj);
  // }

  insertProduct(prodobj,image)
  {
      console.log(prodobj);
      const formData = new FormData();
      formData.append("vendorId",prodobj.vendorId);

      formData.append("productName",prodobj.productName);
      formData.append("category",prodobj.category);
      formData.append("description",prodobj.description);
      formData.append("cp",prodobj.cp);
      formData.append("mrp",prodobj.mrp);
      formData.append("quantity",prodobj.quantity);

      formData.append("uploadimage",image)
    return this.http.post("http://localhost:8080/OnlineShop/vendor/",formData);
  }

  getProducts(username)
  {
    return  this.http.get("http://localhost:8080/OnlineShop/vendor/"+username);  
  }


}
