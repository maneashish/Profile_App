import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PersonListComponent } from './person-list/person-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgePipe } from './age.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    PersonListComponent,
    AgePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
