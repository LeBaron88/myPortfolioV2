import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {

  constructor() { }

  goTo(link: string) {
    document.getElementById(link).scrollIntoView({
      behavior: 'smooth'
    });
  }
}
