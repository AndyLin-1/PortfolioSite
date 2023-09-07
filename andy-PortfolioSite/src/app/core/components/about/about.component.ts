import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  isDarkMode: boolean = false;

  constructor(private themeService: ThemeService) { }

  ngOnInit(): void {
    this.themeService.getIsDarkMode().subscribe((isDarkMode) => {
      this.isDarkMode = isDarkMode;
    });
  }

  getIconLogo(icon: string): string {
    var path = '../../assets/icons/' + icon;
    if(this.isDarkMode) {
      path += '_dark.png';
    }
    else {
      path += '_light.png';
    }
    return path;
  }

}
