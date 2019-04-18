import { Component, OnInit } from '@angular/core';
import { PersonalInformationService } from 'src/app/services/personal-information.service';
import { PersonalInformation } from './personalInformation';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css'],
  providers: [PersonalInformationService]
})
export class PersonalInformationComponent implements OnInit {

  constructor(private InfoService: PersonalInformationService) { }

  personalInformations: PersonalInformation[];

  ngOnInit() {
    this.getInfo();
  }

  getInfo() {
    this.InfoService.getInfo().subscribe(data => {
      this.personalInformations = data;
    });
  }

}
