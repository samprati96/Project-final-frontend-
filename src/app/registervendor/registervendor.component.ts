import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VendordataService } from '../vendordata.service';

@Component({
  selector: 'app-registervendor',
  templateUrl: './registervendor.component.html',
  styleUrls: ['./registervendor.component.css']
})
export class RegistervendorComponent implements OnInit {

  vendor={"name":"","phone":"","address":"","username":"","password":""};
  constructor(private route:ActivatedRoute,
    private router:Router,
    private service:VendordataService) 
  {

  }


  ngOnInit() {
  }

  Insert()
  {
    console.log("-------------------------------");
    console.log(this.vendor);

   let observeRes= this.service.insert(this.vendor);
   this.router.navigate(['/login']);
   observeRes.subscribe((res)=>{

    console.log("-------------------------------");

     console.log(res);

     this.router.navigate(['login']);
     
    console.log("-------------------------------");

   });
}
}
