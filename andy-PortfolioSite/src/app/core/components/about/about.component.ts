import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  isDarkMode: boolean = false;
  currentTheme: string = 'white'

  constructor(private themeService: ThemeService) { }

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
