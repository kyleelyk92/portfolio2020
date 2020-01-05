import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { PageComponent } from "./page/page.component";
import { LandingPageComponent } from "./landing-page/landing-page.component";

const routes: Routes = [
  {
    path: "",
    component: PageComponent,
    children: [
      { path: "home", component: HomeComponent },
      { path: "", component: LandingPageComponent }
    ]
  },
  { path: "**", redirectTo: "home" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
