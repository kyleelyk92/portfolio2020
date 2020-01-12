import { Component, OnInit } from "@angular/core";
import { CarouselModule, WavesModule } from "angular-bootstrap-md";
import { NgbCarouselConfig } from "../../../node_modules/@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-landing-page",
  templateUrl: "./landing-page.component.html",
  styleUrls: ["./landing-page.component.scss"]
})
export class LandingPageComponent implements OnInit {
  images = [1055, 194, 368].map(n => `https://picsum.photos/id/${n}/900/500`);

  showNavigationArrows = false;
  showNavigationIndicators = true;
  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.showNavigationArrows = false;
    config.showNavigationIndicators = true;
  }

  ngOnInit() {}
}
