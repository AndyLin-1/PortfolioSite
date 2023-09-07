import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isDarkMode: boolean = false;

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    this.themeService.getIsDarkMode().subscribe((isDarkMode) => {
      this.isDarkMode = isDarkMode;
    });
  }

  toggleMode() {
    this.themeService.toggleDarkMode();
  }

  getImagePath () {
    if (this.isDarkMode == true) {
      return "../../assets/Light.png";
    } 
    return "../../assets/Dark.png";
  }

}
