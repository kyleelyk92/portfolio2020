import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { PageComponent } from "./page/page.component";
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { SkillsComponent } from "./skills/skills.component";
import { ContactComponent } from "./contact/contact.component";
import { ProjectsComponent } from "./projects/projects.component";

const routes: Routes = [
  {
    path: "",
    component: PageComponent,
    children: [
      { path: "", component: LandingPageComponent },
      { path: "home", component: HomeComponent },
      { path: "projects", component: ProjectsComponent },
      { path: "skills", component: SkillsComponent },
      { path: "contact", component: ContactComponent }
    ]
  },
  { path: "**", redirectTo: "home" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
