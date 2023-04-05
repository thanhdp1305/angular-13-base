import { Routes } from "@angular/router";
import { SigninComponent } from "./components/signin/signin.component";
import { NoAuthGuard } from "../core/guards/no-auth.guard";

export const AuthRoutes: Routes = [
    {
        path: 'signin',
        canActivate: [NoAuthGuard],
        component: SigninComponent
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'signin'
    }
]