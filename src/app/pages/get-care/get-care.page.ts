import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-care',
  templateUrl: './get-care.page.html',
  styleUrls: ['./get-care.page.scss'],
})
export class GetCarePage implements OnInit {

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  basicInfo(form) {
/*     this.basicInfo(form.value);
 */  }

}
