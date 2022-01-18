import { Routes } from "@angular/router";
import { LoginPage } from "./components/login/login.page";
import { ProfilePage } from "./components/profile/profile.page";
import { RecipesPage } from "./components/recipes/recipes.page";
import { SignUpPage } from "./components/sign-up/sign-up.page";

export const routes: Routes = [
   
        {path:'', component: LoginPage},
        {path:'signup',component: SignUpPage},
        {path: 'recipes', component: RecipesPage},
        {path: 'profile', component: ProfilePage}
];