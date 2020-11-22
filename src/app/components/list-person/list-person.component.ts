import { Component, OnInit } from '@angular/core';

import { PersonService } from '../../services/person.service';
@Component({
  selector: 'app-list-person',
  templateUrl: './list-person.component.html',
  styleUrls: ['./list-person.component.css'],
})
export class ListPersonComponent implements OnInit {
  persons: any = [];
  constructor(private personService: PersonService) {}

  ngOnInit(): void {
    this.personService.getPersons().subscribe(
      (res) => {
        this.persons = res;
      },
      (err) => console.error(err)
    );
  }
}
