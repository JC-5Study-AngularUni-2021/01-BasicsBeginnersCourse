import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BoilerPlateComponent } from './boiler-plate/boiler-plate.component';
import { ProjectIntroComponent } from './project-intro/project-intro.component';
import { NotesComponent } from './notes/notes.component';
import { ProjectAPIComponent } from './project-api/project-api.component';
import { ProjectJSONComponent } from './project-json/project-json.component';

const routes: Routes = [
  {path: '', component: BoilerPlateComponent},
  {path: 'notes', component: NotesComponent},
  {path: 'boilerPlate', component: BoilerPlateComponent},
  {path: 'projectIntro', component: ProjectIntroComponent},
  {path: 'projectJSON', component: ProjectJSONComponent},
  {path: 'projectAPI', component: ProjectAPIComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
