import { Routes } from "@angular/router";
import { AuthGuard } from "../core/guards/auth.guard";
import { MainComponent } from "../core/components/main/main.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { ExampleComponent } from "./components/example/example.component";

export const ConsoleRoutes: Routes = [
    {
        path: '',
        component: MainComponent,
        // canActivate: [AuthGuard],
        children: [
            {
                path: 'dashboard',
                component: DashboardComponent
            },
            {
                path: 'example-document',
                component: ExampleComponent
            },
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'dashboard'
            }
        ]
    }
]