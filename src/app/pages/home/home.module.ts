import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children:
      [
        {
          path: 'get-care',
          loadChildren: '../get-care/get-care.module#GetCarePageModule'
        },
        {
          path: 'schedule',
          loadChildren: '../schedule/schedule.module#SchedulePageModule'
        },
        {
          path: 'map',
          loadChildren: '../map/map.module#MapPageModule'
        },
        {
          path: 'appointments',
          loadChildren: '../appointments/appointments.module#AppointmentsPageModule'
        }
      ]
  },
  {
    path: '',
    component: HomePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HomePage]
})
export class HomePageModule { }
