import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerdataService } from '../customerdata.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  customer={"name":"","password":"","phone":"","username":""};
  constructor(private route:ActivatedRoute,
    private router:Router,
    private service:CustomerdataService) 
  {

  }


  ngOnInit() {
  }

  Insert()
  {
    console.log("-------------------------------");
    console.log(this.customer);

   let observeRes= this.service.insert(this.customer);

   observeRes.subscribe((res)=>{

    console.log("-------------------------------");

     console.log(res);

     this.router.navigate(['/home']);
     
    console.log("-------------------------------");

   });
}}
