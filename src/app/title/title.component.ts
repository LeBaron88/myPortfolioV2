import { Component, OnInit } from '@angular/core';
import { ScrollService } from '../shared/scroll.service';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {

  constructor(private scrollService: ScrollService) { }

  ngOnInit() {
  }

  goTo(link: string) {
    this.scrollService.goTo(link);
  }

}
