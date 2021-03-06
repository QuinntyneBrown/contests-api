﻿import { Routes, RouterModule } from '@angular/router';

import {
    HomePageComponent,
} from "../pages";

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home',
    },
    {
        path: 'home',
        component: HomePageComponent
    }
];

export const RoutingModule = RouterModule.forRoot([...routes]);

export const routedComponents = [HomePageComponent];

