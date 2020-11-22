import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Importo componentes
import { WellcomeComponent } from './components/wellcome/wellcome.component';
import { ListPersonComponent } from './components/list-person/list-person.component';
import { PersonFormComponent } from './components/person-form/person-form.component';

const routes: Routes = [
  {
    path: '',
    component: WellcomeComponent,
  },
  {
    path: 'list',
    component: ListPersonComponent,
  },
  {
    path: 'add',
    component: PersonFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
