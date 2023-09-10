import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  
  @Input() activeElement: string | undefined; 
  @Output() linkClicked = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }


  scrollTo(targetId: string) {
    this.linkClicked.emit(targetId);
  }

  test(){
    console.log(this.activeElement);
  }

}
