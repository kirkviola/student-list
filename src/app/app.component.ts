import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<h1>Student List!</h1>',
  styles: ["h1 { color: red; } "]
})
export class AppComponent implements OnInit {
  title = 'student-list';

  ngOnInit() : void {
    console.debug("This is a debug message");
  }
}
