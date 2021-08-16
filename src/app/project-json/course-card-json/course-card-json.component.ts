import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
// member variables
import { I_CourseJSON } from '../model/course';

// @Component is a 'decorator'
@Component({
  // These are Angular Properties
  selector: 'app-course-card-json',
  templateUrl: './course-card-json.component.html',
  styleUrls: ['./course-card-json.component.css']
})

// This is a TypeScript 'Class'
export class CourseCardJSONComponent implements OnInit {

    // @Input is a 'decorator'
    @Input()
    course123!: I_CourseJSON
    // could initialise in this way:
    // course: I_Course = {id: 0, description: "", iconUrl: "", longDescription: "", category: "", lessonsCount: 0;}
    // OR 
    // The '!' tells the compile not to worry about this not being defined - This problem happens because we are using a Model/interface to structure the data.
    
    
    // @Output is a 'Decorator'
    @Output()
    customClickExample = new EventEmitter<I_CourseJSON>()
    // I think this is needed so you can emit the data from the child to the parent
  
    constructor() {  }
  
    ngOnInit(): void {
    }
  
    onCourseView() {
      // Test that working by console.log
      console.log('Test on Course Card')
      this.customClickExample.emit(this.course123)
    }
    
    onClassColour() {
      if (this.course123.category == 'BEGINNER') {
        return 'beginner'
      } else {
        return ''
      }
    }
  
    onStyleCrd () {
      if (this.course123.category == 'BEGINNER') {
      return {'text-decoration' : 'underline'}
      } else {
        return {'text-decoration' : 'none'}
      }
    }
  
}
