import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(private authService: AuthenticationService,
    private  router:  Router,
    private alertCtrl: AlertController) { }

  ngOnInit() {
  }


  register(form) {
    this.authService.register(form.value).subscribe((res) => {
      this.router.navigateByUrl('home');
    });
  }

  async presentConfirm() {
    let alert = await this.alertCtrl.create({
      message: 'ተመዝግበዋል',
    });
   await alert.present();
  }

}
