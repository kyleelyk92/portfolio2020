import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
@Injectable({
  providedIn: "root"
})
export class EmailerService {
  constructor(private http: HttpClient) {}

  sendEmail(fromEmail: string, from: string, messageBody: string) {
    console.log("sending request to server");
    const url = "http://138.197.197.67:3000";
    const httpOptions = {
      headers: new HttpHeaders({
        // these are just placeholder and don't do anything
        "Content-Type": "text",
        "response-type": "text"
      })
    };
    const body = {
      from,
      messageBody,
      fromEmail
    };

    console.log(body);
    const myres = this.http
      .post(url, body, { responseType: "text" })
      .subscribe({
        next(response) {
          console.log(response);
        },
        error(msg) {
          console.log("error in getting response", msg);
        }
      });
  }
}
