import { Component } from "@angular/core";
import { CoursesService } from "./courses.service";

@Component({
    selector: 'courses',
    template:`
  <h2>{{ title }}</h2>
  <ul>
  <li *ngFor="let b1 of courseslist">
      {{b1}}
  </li>
  </ul>
  `,
    styleUrl:'./courses.component.css'
})
export class CoursesComponent{
    title= "list of courses";
    courseslist;

    constructor(){
        let service = new CoursesService();
        this.courseslist = service.getCourses();
    }
}
