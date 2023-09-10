import { Component, OnInit } from '@angular/core';
import { ProjectlistService, Project, Feature } from '../../services/projectlist.service';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-view-projects',
  templateUrl: './view-projects.component.html',
  styleUrls: ['./view-projects.component.css']
})
export class ViewProjectsComponent implements OnInit {

  projects: Project[];
  isDarkMode: boolean = false;
  currentTheme: string = 'white'

  constructor(projectListService: ProjectlistService, private themeService: ThemeService) { 
    this.projects = projectListService.getProjects();
  }

  ngOnInit(): void {
    this.themeService.getIsDarkMode().subscribe((isDarkMode) => {
      this.isDarkMode = isDarkMode;
      if (isDarkMode) {
        this.currentTheme = 'white';
      }
      else {
        this.currentTheme = 'black';
      }
    });
  }

}
