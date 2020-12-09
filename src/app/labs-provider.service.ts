import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Lab } from './labs';

@Injectable({
  providedIn: 'root'
})
export class LabsProviderService {

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };

  constructor(private httpClient : HttpClient) { }

  retrieveLabs() {
    return this.httpClient.post('/api/labs', {responseType: 'json'});
  }

  updateLab(lab : Lab) {
    return this.httpClient.post<Lab>('/api/labs/update', {"lab": lab}, this.httpOptions).toPromise();
  }
}
