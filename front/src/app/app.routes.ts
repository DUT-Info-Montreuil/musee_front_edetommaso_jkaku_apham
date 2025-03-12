import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { ExpositionPageComponent } from './exposition-page/exposition-page.component';

export const routes: Routes = [
    
    { path:"",component:HomePageComponent},
    { path:"exposition",component:ExpositionPageComponent },
    { path: "404", component: NotFoundPageComponent },
    { path: "**", redirectTo: "404" },
];
