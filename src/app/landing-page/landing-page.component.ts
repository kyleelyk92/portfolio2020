import { Component, OnInit } from "@angular/core";
import { NgbCarouselConfig } from "../../../node_modules/@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-landing-page",
  templateUrl: "./landing-page.component.html",
  styleUrls: ["./landing-page.component.scss"]
})
export class LandingPageComponent implements OnInit {
  numbers = [
    this.getRandomNumber(),
    this.getRandomNumber(),
    this.getRandomNumber(),
    this.getRandomNumber(),
    this.getRandomNumber(),
  ];
  captions = [
    'Welcome to my Website!',
    'My name is Kyle',
    "I'm a Web Developer",
    'Here you can check out some of my projects',
    'If you want to reach me, go to my visit my Contact page'
  ];
  images = this.numbers.map(n => `https://picsum.photos/id/${n}/900/500`);

  showNavigationArrows = false;
  showNavigationIndicators = true;
  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.showNavigationArrows = false;
    config.showNavigationIndicators = true;
  }

  ngOnInit() { }
  getRandomNumber() {
    return Math.floor(Math.random() * 1000);
  }
}
