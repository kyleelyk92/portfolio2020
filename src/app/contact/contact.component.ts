import { EmailerService } from "./../services/emailer.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.scss"]
})
export class ContactComponent implements OnInit {
  constructor(private emailer: EmailerService) {}

  ngOnInit() {
    console.log(this.emailer);
  }

  onSubmit(form: any) {
    if (form.valid) {
      console.log(form);
      const sender: string = form.value.senderName;
      const messageBody: string = form.value.content;
      const senderEmail: string = form.value.senderEmail;
      this.emailer.sendEmail(senderEmail, sender, messageBody);
    } else {
      console.log("form not valid");
    }
  }
}
