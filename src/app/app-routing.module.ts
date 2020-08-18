import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectsComponent } from './projects/projects.component';
import { HobbiesComponent } from './hobbies/hobbies.component';

const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'skills', component: SkillsComponent},
  {path: 'hobbies', component: HobbiesComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: 'contacts', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
