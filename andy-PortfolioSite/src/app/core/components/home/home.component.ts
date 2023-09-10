import { Component, OnInit, ElementRef, Renderer2} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  activeElement: string = 'about';

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    //Options for intersection observer
    const options = {
      root: null, 
      rootMargin: '0px', 
      threshold: [0.5, 1] //Triggers when 50% shows, and when it leaves
    };
  
    const observer = new IntersectionObserver(this.handleIntersection.bind(this), options);
  
    const aboutElement = this.el.nativeElement.querySelector('#about');
    const viewProjectElement = this.el.nativeElement.querySelector('#view-project');
    const experienceElement = this.el.nativeElement.querySelector('#experience');
  
    observer.observe(aboutElement);
    observer.observe(viewProjectElement);
    observer.observe(experienceElement);
  }

  scrollTo(targetId: string) {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  }

  handleIntersection(entries: IntersectionObserverEntry[]) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        this.activeElement = entry.target.id;
      }
    });
  }

}
