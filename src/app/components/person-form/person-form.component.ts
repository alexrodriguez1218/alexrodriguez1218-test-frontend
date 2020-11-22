import { Component, OnInit } from '@angular/core';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.css'],
})
export class PersonFormComponent implements OnInit {
  info: any = {
    person: {
      fullname: '',
      birth: '',
      identification: '',
      type_identification: '',
    },
    father: {
      fullname: '',
      birth: '',
      identification: '',
      type_identification: '',
    },
    mother: {
      fullname: '',
      birth: '',
      identification: '',
      type_identification: '',
    },
  };

  mjsConfirmacion: string = '';
  requiredFather: boolean = false;
  requiredMother: boolean = false;

  typeDocuments: any = [
    {
      value: 'CC',
      label: 'Cedula de ciudadania',
    },
    {
      value: 'TA',
      label: 'Tarjeta de identidad',
    },
    {
      value: 'RC',
      label: 'Registro civil',
    },
    {
      value: 'CE',
      label: 'Cedula de extranjeria',
    },
    {
      value: 'PA',
      label: 'Passaporte',
    },
  ];
  constructor(private personService: PersonService) {}

  ngOnInit(): void {}

  saveNewPerson() {
    !this.requiredFather && delete this.info.father;
    !this.requiredMother && delete this.info.mother;

    this.personService.savePerson(this.info).subscribe(
      (res: any) => {
        const { msj } = res;
        this.mjsConfirmacion = msj;
        setTimeout(() => {
          this.mjsConfirmacion = '';
        }, 3000);
      },
      (err) => console.error(err)
    );
  }

  handleFather() {
    this.requiredFather = !this.requiredFather;
    console.log(this.requiredFather);
  }

  handleMother() {
    this.requiredMother = !this.requiredMother;
    console.log(this.requiredMother);
  }
}
