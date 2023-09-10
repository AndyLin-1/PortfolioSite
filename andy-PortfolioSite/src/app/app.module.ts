import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/components/header/header.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { AboutComponent } from './core/components/about/about.component';
import { HomeComponent } from './core/components/home/home.component';
import { ViewProjectsComponent } from './core/components/view-projects/view-projects.component';
import { ProjectsComponent } from './core/components/projects/projects.component';
import { SideBarComponent } from './core/components/side-bar/side-bar.component';
import { ExperienceComponent } from './core/components/experience/experience.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    HomeComponent,
    ViewProjectsComponent,
    ProjectsComponent,
    SideBarComponent,
    ExperienceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
