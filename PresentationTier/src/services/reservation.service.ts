import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

//const _baseUrl = 'http://localhost:8080/api/reservations';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  constructor(private http: HttpClient) {

  }
  readonly _baseUrl = "https://localhost:44336/api/Contact";

  formData: Reservation = new Reservation();
  list: Reservation[] = [];

  postContact() {
    return this.http.post(this._baseUrl, this.formData);
  }

  putContact() {
    return this.http.put(`${this._baseUrl}/${this.formData.id}`, this.formData);
  }
  deleteContact(id: number) {
    return this.http.delete(`${this._baseUrl}/${id}`);
  }

  refreshList() {
    this.http.get(this._baseUrl)
      .toPromise()
      .then(res => this.list = res as Reservation[]);
  }
}

export class Reservation {
  id: number;
  name: string;
  phoneNumber: string;
  birthDate: Date;
  description: string;
  contactId: number;
  contactTypeId: number;
  contactType: string;


  constructor() {
    this.id = 0;
    this.contactId = 0;
    this.name = "";
    this.phoneNumber = "";
    this.birthDate = new Date();
    this.description = "";
    this.contactTypeId = 0;
    this.contactType = '';
  }

}