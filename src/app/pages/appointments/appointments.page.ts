import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.page.html',
  styleUrls: ['./appointments.page.scss'],
})
export class AppointmentsPage implements OnInit {

  constructor(private alertCtrl: AlertController) { }

  ngOnInit() {
  }
  
  async presentConfirm() {
    let alert = await this.alertCtrl.create({
      message: 'ቀጠሮው እንዲያዝ ይፈልጋሉ?',
      buttons: [
        {
          text: 'አይ',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'አዎ',
          handler: () => {
            console.log('Buy clicked');
          }
        }
      ]
    });
   await alert.present();
  }
  
}
