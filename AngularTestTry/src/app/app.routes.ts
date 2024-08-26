import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NotfoundComponent } from './notfound/notfound.component';

export const routes: Routes = [
    {path:'', redirectTo:'home', pathMatch:'full' , title:'home'},
    {path:'home', component:HomeComponent, title:'Home'},
    {path:'about', component:AboutComponent, title:'About'},
    {path:'contact', component:ContactComponent, title:'Contact'},
    {path:'**', component:NotfoundComponent, title:'Not Found Page'}
];
