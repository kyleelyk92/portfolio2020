import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
@Injectable({
  providedIn: "root"
})
export class EmailerService {
  constructor(private http: HttpClient) {}

  sendEmail(fromEmail: string, senderName: string, content: string) {
    console.log("sending request to server");
    const url = "http://localhost:3000";
    const httpOptions = {
      headers: new HttpHeaders({
        // these are just placeholder and don't do anything
        "Content-Type": "text",
        "response-type": "text"
      })
    };
    const body = {
      content,
      senderName,
      fromEmail
    };

    const myres = this.http.get(url, { responseType: "text" }).subscribe({
      next(response) {
        console.log(response);
      },
      error(msg) {
        console.log("error in getting response", msg);
      }
    });
  }
}
