import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { LoginPage } from './components/login/login.page';
import { SignUpPage } from './components/sign-up/sign-up.page';
import { ReactiveFormsModule } from '@angular/forms';
import { RecipesPage } from './components/recipes/recipes.page';
import { ProfilePage } from './components/profile/profile.page';
import { UsersListComponent } from './components/users-list/users-list.component';
import { UsersListItemComponent } from './components/users-list-item/users-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPage,
    SignUpPage,
    RecipesPage,
    ProfilePage,
    UsersListComponent,
    UsersListItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TooltipModule.forRoot(),
    BsDatepickerModule.forRoot(),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
