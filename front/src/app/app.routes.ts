import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { ExpositionPageComponent } from './pages/exposition-page/exposition-page.component';

export const routes: Routes = [

    { path:"",component:HomePageComponent},
    { path:"exposition",component:ExpositionPageComponent },
    { path: "404", component: NotFoundPageComponent },
    { path: "**", redirectTo: "404" },
];
