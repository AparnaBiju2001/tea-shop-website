import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MenuComponent } from './menu/menu.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: '', component: HomeComponent },  // Home path
  { path: 'about', component: AboutComponent },  // About path
  { path: 'menu', component: MenuComponent },  // Menu path
  { path: 'contact', component: ContactComponent }  // Contact path
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],  // RouterModule setup
  exports: [RouterModule]
})
export class AppRoutingModule { }
