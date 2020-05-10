import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';
import { ScrollService } from '../shared/scroll.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects = [];
  more = true;
  constructor(private dataService: DataService, private scrollService: ScrollService) { }

  ngOnInit() {
    this.projects = this.dataService.getProjectsSmall();
  }

  showMore() {
    this.projects = this.dataService.getProjectsFull();
    this.more = false;
  }

  showLess() {
    this.projects = this.dataService.getProjectsSmall();
    this.more = true;
    this.scrollService.goTo('projects');
  }


}
