import { Component, OnInit } from '@angular/core';
import { AdmindataService } from '../admindata.service';

@Component({
  selector: 'app-adminrecordlist',
  templateUrl: './adminrecordlist.component.html',
  styleUrls: ['./adminrecordlist.component.css']
})
export class AdminrecordlistComponent implements OnInit {

  admins:any;
  constructor(private service:AdmindataService) { }

  ngOnInit() {
    let ObRes=this.service.getAdminRecordData();
    ObRes.subscribe((result)=>{
      this.admins=result;
    });
  }
}
