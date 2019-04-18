import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { PersonalInformation } from '../components/personal-information/personalInformation';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PersonalInformationService {

  constructor(private http: HttpClient) { }

  path = environment.path;

  getInfo(): Observable<PersonalInformation[]> {
    return this.http.get<PersonalInformation[]>(this.path + '/info');
  }
}
