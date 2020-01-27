import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerdataService } from '../customerdata.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  customer={"customerId":"","name":"","password":"","phone":"","role":"","status":"","username":""};
  message="Deactive account";

  constructor(private route:ActivatedRoute,
    private router:Router,
    private service:CustomerdataService) { }

  ngOnInit() {
   let arr=localStorage.getItem("userDetail");
    this.customer=JSON.parse(arr);
    console.log(this.customer);



  }

  Deactivate()
  {
    let obRes=this.service.DeleteByUsername(this.customer.username);
    window.sessionStorage.setItem("active","0");
    this.router.navigate(['/home']);
    obRes.subscribe((res)=>{

      this.message="Deactivated successfully";
      console.log("-------------------------------");
  
       console.log(res);
       window.sessionStorage.setItem("active","0");

       this.router.navigate(['/home']);
       
      console.log("-------------------------------");
  
     });
  }

}
