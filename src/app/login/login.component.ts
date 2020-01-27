import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthserviceService } from '../authservice.service';
import { ValidatedataService } from '../validatedata.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username="";
  password="";
  role="";
  error:boolean=false;
  constructor(private router:Router,private service:ValidatedataService) { 
  }
  ngOnInit() {
   
  }
  

  login()
{
     if(this.username.length==0)
    {
      alert("length==0")
    
    }
    else
   {
     if(this.role=="VENDOR")
     {

         this.service.SelectVendor(this.username).subscribe(
        (res)=>{
        console.log(res['password']);
        console.log("inside");
        if(res['password']==this.password)
        {
          window.sessionStorage.setItem("active","1");
          console.log(res);
          sessionStorage['login_status'] = '1';
          localStorage.setItem("user",res['role']);
          localStorage.setItem("userDetail",JSON.stringify(res));
          localStorage.setItem("flag","true");
          localStorage.setItem("VendorDetails",res['username']);

          this.router.navigate(["/vendor"]);
        
        }
        else{
          alert("Invalid Login");
        }
      })


     }//if role
     else if(this.role=="CUSTOMER")
     {


      this.service.SelectCustomer(this.username).subscribe(
        (res)=>{
        console.log(res);
        console.log("inside");
        if(res['password']==this.password)
        {
          window.sessionStorage.setItem("active","1");
          sessionStorage['login_status'] = '1';
          localStorage.setItem("user",res['role']);
          localStorage.setItem("userDetail",JSON.stringify(res));
          localStorage.setItem("CustomerDetails",res['username']);
          localStorage.setItem("CustomerName",res['name']);

          localStorage.setItem("flag","true");
          this.router.navigate(["/home"]);
        
        }
        else{
          alert("Invalid Login");
        }
      })



     }//customer if
     else if(this.role=="ADMIN")
     {
       
      if(this.password=="111"&&this.username=="m@gmail.com")
      {
        window.sessionStorage.setItem("active","1");
        sessionStorage['login_status'] = '1';
        localStorage.setItem("user",'ADMIN');
      //  localStorage.setItem("userDetail",JSON.stringify());
        localStorage.setItem("flag","true");
        this.router.navigate(["/admin"]);
      
      }
      else{
        alert("Invalid Login");
      }

     }//admin if

   }//else


}

}//class
