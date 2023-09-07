import { Component, OnInit, ViewChild } from '@angular/core';
import { ProjectlistService, Project, Feature } from '../../services/projectlist.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})

export class ProjectsComponent implements OnInit {
  
  projects: Project[];
  selectedProject: Project;
  openItemIndex: number | null = null;

  constructor(projectListService: ProjectlistService, private route: ActivatedRoute, private router: Router) { 
    this.projects = projectListService.getProjects();
    this.selectedProject = this.projects[0];

    this.route.params.subscribe((params) => {
      const index = +params['id'];
      if(index <= 5 && index > 0) {
        this.selectedProject = this.projects[index-1];
      }
    });
  }

  ngOnInit(): void {
    
  }


  selectProject(index: number) {
    if (index >= 0 && index < this.projects.length) {
      this.selectedProject = this.projects[index];
      this.router.navigate(['/projects/' + (index+1)]);
      this.openItemIndex = null;
    }
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

}
