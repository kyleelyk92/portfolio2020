import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { MatSliderModule } from "@angular/material/slider";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { HeaderComponent } from "./template/header/header.component";
import { FooterComponent } from "./template/footer/footer.component";
import { PageComponent } from "./page/page.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatButtonModule } from "@angular/material/button";
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { ProjectsComponent } from "./projects/projects.component";
import { ProjectComponent } from "./projects/project/project.component";
import { ContactComponent } from "./contact/contact.component";
import { SkillsComponent } from "./skills/skills.component";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    PageComponent,
    LandingPageComponent,
    ProjectsComponent,
    ProjectComponent,
    ContactComponent,
    SkillsComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatSliderModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
