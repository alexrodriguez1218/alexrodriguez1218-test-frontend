import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { PersonFormComponent } from './components/person-form/person-form.component';
import { WellcomeComponent } from './components/wellcome/wellcome.component';
import { ListPersonComponent } from './components/list-person/list-person.component';

import { PersonService } from './services/person.service';
@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    PersonFormComponent,
    WellcomeComponent,
    ListPersonComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [PersonService],
  bootstrap: [AppComponent],
})
export class AppModule {}
