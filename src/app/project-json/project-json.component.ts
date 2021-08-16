import { Component, OnInit } from '@angular/core';

import { COURSES } from '../../assets/db-data';
import { I_CourseJSON } from './model/course';

@Component({
  selector: 'app-project-json',
  templateUrl: './project-json.component.html',
  styleUrls: ['./project-json.component.css']
})
export class ProjectJSONComponent implements OnInit {

  /* // this is how we started
  // here we are explicit connecting a variable to each of the courses in the JSON
  coreCourse: any = COURSES[0]
  coreCourse1: any = COURSES[1]
  coreCourse2: any = COURSES[2]
  */

  // Now we are creating a variable that contains all the information from the 'db-data' file
  courseJSON: I_CourseJSON[] = COURSES;
  dateExample: Date = new Date()
  titleExample: string = 'hello justin'
  priceExample: number = 9.99
  
  constructor() { }

  ngOnInit(): void {
  }

  // Receives the data in of 'course' from the child component
  // 'Course' model is just being used to set the 'type' could of used 'any'
  onSecondEvent(course: I_CourseJSON) {
    console.log('Second test', course)
  }

}
