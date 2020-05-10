import { Component, OnInit, HostListener, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { ScrollService } from '../shared/scroll.service';
import * as M from 'materialize-css/dist/js/materialize';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, AfterViewInit {

  navScrolled = false;
  constructor(private scrollService: ScrollService) { }

  ngOnInit() { }
  @ViewChild('sidenav') sidenav: ElementRef;
  @HostListener('document:scroll')
  scrollDocument() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
      this.navScrolled = true;
    } else {
      this.navScrolled = false;
    }
  }

  goTo(link: string) {
    this.scrollService.goTo(link);
    const instance = M.Sidenav.getInstance(this.sidenav.nativeElement);
    instance.close();
  }

  ngAfterViewInit() {
    M.Sidenav.init(this.sidenav.nativeElement);
  }

}
