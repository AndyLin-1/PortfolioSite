import { Component, OnInit, ViewChild } from '@angular/core';
import { ProjectlistService, Project, Feature } from '../../services/projectlist.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})

export class ProjectsComponent implements OnInit {
  
  selectedProject: Project;
  openItemIndex: number | null = null;
  index: number = 1;
  projectListService: ProjectlistService;
  isDarkMode: boolean = false;
  currentTheme: string = 'white'

  constructor(projectListService: ProjectlistService, private route: ActivatedRoute, private router: Router, private themeService: ThemeService) { 
    this.projectListService = projectListService
    const projects = this.projectListService.getProjects();
    this.selectedProject = projects[0];

    this.route.params.subscribe((params) => {
      this.index = +params['id'];
      if(this.index <= 5 && this.index > 0) {
        this.selectedProject = projects[this.index-1];
      }
    });
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

  toggleItem(index: number): void {
    if (this.openItemIndex === index) {
      // Close the currently open item
      this.openItemIndex = null;
    } else {
      // Open the clicked item
      this.openItemIndex = index;
    }
  }

  getProjectsLength(): number {
    return this.projectListService.getProjects().length;
  }

  getPrevIndex(): number {
    const result = (this.index - 1) % this.getProjectsLength();
    if(result <= 0) {
      return this.getProjectsLength();
    }
    return result;
  }

  getNextIndex(): number {
    const result = (this.index + 1) % this.getProjectsLength();
    if(result == 0) {
      return this.getProjectsLength();
    }
    return result;
  }

  resetBoard(): void {
    this.openItemIndex = null;
  }

}
