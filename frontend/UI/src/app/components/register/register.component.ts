import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from '../../services/authenticate.service';
import { RegisterUser } from './registerUser';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [AuthenticateService]
})
export class RegisterComponent implements OnInit {

  constructor(private authService: AuthenticateService) { }

  registerUser: any = {};

  ngOnInit() {
  }

  register(registerUser: RegisterUser) {
    this.authService.register(registerUser);
  }

}
