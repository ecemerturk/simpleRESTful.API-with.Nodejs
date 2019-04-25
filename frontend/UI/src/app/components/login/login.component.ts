import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from 'src/app/services/authenticate.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthenticateService]
})
export class LoginComponent implements OnInit {

  constructor(private authservice: AuthenticateService) { }

  loginUser: any = {};

  ngOnInit() {
  }

  login(loginUser) {
    this.authservice.login(loginUser);
  }
}
