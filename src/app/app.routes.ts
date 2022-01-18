import { Routes } from "@angular/router";
import { LoginPage } from "./components/login/login.page";
import { SignUpPage } from "./components/sign-up/sign-up.page";

export const routes: Routes = [
   
        {path:'', component: LoginPage},
        {path:'signup',component: SignUpPage}
        
];