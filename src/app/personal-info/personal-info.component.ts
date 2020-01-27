import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerdataService } from '../customerdata.service';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css']
})
export class PersonalInfoComponent implements OnInit {
  customer={"customerId":"","name":"","password":"","phone":"","role":"","status":"","username":""};
  constructor(private route:ActivatedRoute,
    private router:Router,
    private service:CustomerdataService) 
  {

  }

  ngOnInit() 
  { 
    let username=localStorage.getItem("CustomerDetails");
    let arr=localStorage.getItem("userDetail");
    this.customer=JSON.parse(arr);
    console.log(this.customer);
    this.customer.username=username;
  
  }

  Update()
  {
    console.log("-------------------------------");
    console.log(this.customer);

   let observeRes= this.service.update(this.customer);
   this.router.navigate(['/profile']);
   observeRes.subscribe((res)=>{

    console.log("-------------------------------");

     console.log(res);

     this.router.navigate(['/profile']);
     
    console.log("-------------------------------");

   });
  }

}
