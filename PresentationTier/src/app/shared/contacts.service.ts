import { Injectable } from '@angular/core';
import { Contacts } from './contacts.model';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor(private http: HttpClient) {

  }
  readonly _baseUrl = "https://localhost:44336/api/Contact";

  formData: Contacts = new Contacts();
  list: Contacts[] = [];

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
      .then(res => this.list = res as Contacts[]);
  }

}
