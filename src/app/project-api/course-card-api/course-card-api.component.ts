import { AfterContentInit,AfterViewInit,Component,ContentChildren,ElementRef,EventEmitter,Input,OnInit,Output,QueryList,ViewEncapsulation } from '@angular/core';
import {I_CourseAPI} from '../model/course';
// import {CourseImageComponent} from '../course-image/course-image.component';

@Component({
  selector: 'app-course-card-api',
  templateUrl: './course-card-api.component.html',
  styleUrls: ['./course-card-api.component.css']
})
export class CourseCardApiComponent implements OnInit {

  @Input()
  course!: I_CourseAPI;

  @Input()
  cardIndex!: number;

  @Output('courseChanged')
  courseEmitter = new EventEmitter<I_CourseAPI>();


  constructor() {

  }

  ngOnInit() {

  }


  onSaveClicked(description:string) {

      this.courseEmitter.emit({...this.course, description});

  }

}
