import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: ["h1 { color: red; } "]
})
export class AppComponent implements OnInit {
  title = 'student-list';
  name: string = "";

  clicked(): void {
    this.title = "Fred's student-list";
  }
  ngOnInit() : void {
    console.debug("This is a debug message");
  }
}
