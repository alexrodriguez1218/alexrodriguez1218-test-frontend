import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PersonService {
  API_URI = 'http://localhost:3000/persons';
  constructor(private http: HttpClient) {}

  getPersons() {
    return this.http.get(`${this.API_URI}/`);
  }

  getPerson(id: string) {
    return this.http.get(`${this.API_URI}/${id}`);
  }

  editPerson(info: object) {
    return this.http.put(`${this.API_URI}/edit`, info);
  }

  deletePerson(info: object) {
    return this.http.delete(`${this.API_URI}/delete`, info);
  }

  savePerson(info: object) {
    return this.http.post(`${this.API_URI}/add`, info);
  }
}
