import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VendordataService } from '../vendordata.service';

@Component({
  selector: 'app-addvendorproduct',
  templateUrl: './addvendorproduct.component.html',
  styleUrls: ['./addvendorproduct.component.css']
})
export class AddvendorproductComponent implements OnInit {

  product:any;
  filename: any;
  image: any;
  constructor(private router: Router,
              private service: VendordataService) { }

  ngOnInit() {
  }

  onSelectFile(event) {
    this.image = event.target.files[0];
  }

  InsertProduct(entiredata)
  {
     console.log(this.product);
     let form = entiredata.form.value;
     console.log(entiredata.form.value);
     this.service.insertProduct(form,this.image).subscribe((res)=>{
       this.product = res;
      this.router.navigate(['/vendor']);
    },(error)=>{
      console.log(error);
    })
  }
  onCancel() {
    this.router.navigate(['/vendor']);
  }
}
