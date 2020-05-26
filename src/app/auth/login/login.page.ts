import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss']
})
export class LoginPage implements OnInit {
  public items: Array<{ title: string; note: string; icon: string }> = [];
  username:string;
  password:string;

  constructor( private authService: AuthenticationService) {
  }

  ngOnInit() {
  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }

  login(){
    this.authService.login();
    console.log("Usrename: " + this.username);
    console.log("Password: " + this.password);
  }
}
