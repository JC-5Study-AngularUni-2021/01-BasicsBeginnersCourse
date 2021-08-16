import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { I_CourseAPI } from '../model/course';

@Injectable({
  providedIn: 'root'
})
export class CoursesApiService {

  constructor(private http: HttpClient) { }

  loadCourses() : Observable<I_CourseAPI>{
    
    const params = new HttpParams()
    .set('page', '1')
    .set('pageSize','10');

    return this.http.get<any>('/api/courses', {params})
  }

  saveCourse(course: I_CourseAPI) {

  const headers = new HttpHeaders()
      .set("X-Auth", "userId")

    return this.http.put(`/api/courses/${course.id}`, course, {headers})
  }
}
