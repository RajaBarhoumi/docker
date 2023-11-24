import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  template: `
    <h1>Message: {{ helloMessage }}</h1>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // Define a variable to store the hello message
  helloMessage: string = '';

  // Inject the HttpClient in the constructor
  constructor(private http: HttpClient) { }

  // Implement the OnInit interface and make the HTTP request in ngOnInit
  ngOnInit() {
    // Make an HTTP GET request to the Express API
    this.http.get<any>('http://localhost:4000/hello').subscribe(
      (response: { message: string }) => {
        // Assign the received message to the helloMessage variable
        this.helloMessage = response.message;
      },
      (error: any) => {
        console.error('Error fetching data:', error);
      }
    );
  }
}
