import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-intro',
  templateUrl: './project-intro.component.html',
  styleUrls: ['./project-intro.component.css']
})
export class ProjectIntroComponent implements OnInit {
  
  data: any = 
  { 
    title: 'Justin Test Text',
    Url:  "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png"
  };
  
  constructor() { }

  ngOnInit(): void {
  }

  onLogoClick() {
    alert('hello justin')
  }

  onKeyUp(newTitle: string) {
    // 'this' is referring to the variable declares at the top of this class
    this.data.title = newTitle
  }
}
