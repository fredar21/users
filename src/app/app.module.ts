import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { UsersCreateComponent } from './components/users-create/users-create.component';
import { UsersInformationComponent } from './components/users-information/users-information.component';

//Services

import { DataUsersService } from './services/data-users.service';


@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent,
    UsersCreateComponent,
    UsersInformationComponent
  ],
  imports: [
    NgbModule.forRoot(),
    FormsModule,
    BrowserModule,
    HttpModule
  ],
  providers: [
    DataUsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
