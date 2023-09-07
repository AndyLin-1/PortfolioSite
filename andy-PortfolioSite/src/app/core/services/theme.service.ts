import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  //Initialize Subject to Observe through the local storage
  private isDarkModeSubject = new BehaviorSubject<boolean>(
    localStorage.getItem('isDarkMode') === 'true' || localStorage.getItem('isDarkMode') === null
  );

  constructor() {
    //Sets Initial Theme
    this.setMode();
  }

  /* Toggle Theme */
  toggleDarkMode() {
    const newMode = !this.isDarkModeSubject.value;
    localStorage.setItem('isDarkMode', newMode.toString());
    this.isDarkModeSubject.next(newMode);
    this.setMode();
  }

  /* Returns Observable for theme */
  getIsDarkMode(): Observable<boolean> {
    return this.isDarkModeSubject.asObservable();
  }

  /* Changes Document Theme */
  private setMode() {
    const root = document.documentElement;
    if (this.isDarkModeSubject.value) {
      root.classList.remove('light');
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
      root.classList.add('light');
    }
  }
}
