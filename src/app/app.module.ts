import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BoilerPlateComponent } from './boiler-plate/boiler-plate.component';
import { NotesComponent } from './notes/notes.component';
import { ProjectJSONComponent } from './project-json/project-json.component';
import { ProjectAPIComponent } from './project-api/project-api.component';
import { ProjectIntroComponent } from './project-intro/project-intro.component';
import { CourseCardJSONComponent } from './project-json/course-card-json/course-card-json.component';
import { CourseImageComponent } from './project-api/course-image/course-image.component';
import { CourseCardApiComponent } from './project-api/course-card-api/course-card-api.component';
import { HighlightedDirective } from './project-api/directives/highlighted.directive';
import { NgxUnlessDirective } from './project-api/directives/ngx-unless.directive';


@NgModule({
  declarations: [
    AppComponent,
    BoilerPlateComponent,
    NotesComponent,
    ProjectJSONComponent,
    ProjectAPIComponent,
    ProjectIntroComponent,
    CourseCardJSONComponent,
    CourseImageComponent,
    CourseCardApiComponent,
    HighlightedDirective,
    NgxUnlessDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
