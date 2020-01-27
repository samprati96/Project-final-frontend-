import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  constructor(private router: Router) 
  {

  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
  {
    if(this.IsLoggedIn())
    {
      return true;
    }
    else{
      this.router.navigate(['login']);
      return false;
    }
  }

  IsLoggedIn()
  {
    if(window.sessionStorage.getItem("active") != null 
    && 
    window.sessionStorage.getItem("active") == "1")
    {
      return true;
    }
    else
    {
      return false;
    }
  }

  checkCredentials(userdetails)
  {
    if(userdetails.email == "s@gmail.com"
    &&
    userdetails.password == "000")
    {
      window.sessionStorage.setItem("active","1");

      return "vendor";
    }
    else if(userdetails.email == "m@gmail.com"
    &&
    userdetails.password == "111")
    {
      window.sessionStorage.setItem("active","1");
      return "admin";
    }
    else if(userdetails.email == "t@gmail.com"
    &&
    userdetails.password == "222")
    {
      window.sessionStorage.setItem("active","1");
      return "customer";
    }
    else
    {
      return "0";
    }
  }

  signout()
  {
    window.sessionStorage.setItem("active","0");
  }
}
