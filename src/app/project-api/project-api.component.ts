import {AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {COURSES} from '../../assets/db-data';
import {I_CourseAPI} from './model/course';
import { Observable } from 'rxjs';
import { CoursesApiService } from './services/courses-api.service';
// import {CourseCardComponent} from './course-card-api/course-card.component';
// import {HighlightedDirective} from './directives/highlighted.directive';


@Component({
  selector: 'app-project-api',
  templateUrl: './project-api.component.html',
  styleUrls: ['./project-api.component.css']
})
export class ProjectAPIComponent implements OnInit {

  courses$! : Observable<any>
  // courses_JSON: I_CourseAPI[] = COURSES;
  // courses_JSON: any;

  // constructor(private http: HttpClient) { }
  constructor(private coursesService: CoursesApiService) { }

  ngOnInit(): void {

    // const params = new HttpParams()
    //   .set('page', '1')
    //   .set('pageSize','10');

    // this.http.get('/api/courses', {params})
    // .subscribe(
    //   // val => console.log(val)
    //   (courses) => {this.courses_JSON = courses}
    // )

    // this.courses$ = this.http.get<I_CourseAPI[]>('/api/courses', {params})
    this.courses$ = this.coursesService.loadCourses()

  }

  save(course:I_CourseAPI) {
    this.coursesService.saveCourse(course)
      .subscribe(
        () => {console.log('course saved')}
      )
  }
}
