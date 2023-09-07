import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/components/home/home.component';
import { ProjectsComponent } from './core/components/projects/projects.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Set the default route
  { path: 'projects', redirectTo: 'projects/1'},
  { path: 'home', component: HomeComponent },
  { path: 'projects/:id', component: ProjectsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
