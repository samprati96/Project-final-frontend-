import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  message="";
  constructor() { }

  ngOnInit() {
  }

 LogOut()
 {
  window.sessionStorage.setItem("active","0");
  this.message="Logged Out successfully";
 }

}
