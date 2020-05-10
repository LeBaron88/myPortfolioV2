import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  projects = [
    {
      name: 'JNK Fondation',
      description: 'Organization website built in Angular. Allowing users to contact and make donations to the organization.',
      links: {
        github: 'https://github.com/LeBaron88/jnk_foundation',
        site: 'http://www.jnkfondation.org'
      },
      imgSrc: 'assets/images/jnkfondation.png',
      technology: 'Angular Node Express MaterializeCss EmailJS Stripe'
    },
    {
      name: 'Simon Mpoy V2',
      // tslint:disable-next-line: max-line-length
      description: 'My portfolio website version 2 created in Angular providing a small description of myself, my experience, skills and how to get in touch with me.',
      links: {
        github: 'https://github.com/LeBaron88/myPortfolioV2',
        site: 'http://www.simonmpoy.com'
      },
      imgSrc: '../../assets/images/myPorfolioV2.png',
      technology: 'Angular Node Express MaterializeCss'
    },
    {
      name: 'Emaily',
      // tslint:disable-next-line: max-line-length
      description: 'A react application allowing users to send eamil surveys to a defined list of user and get feedback from them. Users of the application are required to login with their google accounts and purchasae credits before creating a survey.',
      links: {
        github: 'https://github.com/LeBaron88/Emaily',
        site: 'https://gentle-river-26816.herokuapp.com'
      },
      imgSrc: '../../assets/images/emaily.png',
      technology: 'React Node Express MongoDB Passport Redux'
    },
    {
      name: 'Budgetery',
      // tslint:disable-next-line: max-line-length
      description: 'Simple Javascript application to manage a budget. This is one of the project developed during the udemy course called "The Complete JavaScript Course 2019: Build Real Projects!" by Jonas Schmedtmann.',
      links: {
        github: 'https://github.com/LeBaron88/budgetery',
        site: 'https://lebaron88.github.io/budgetery/'
      },
      imgSrc: '../../assets/images/budgetery.png',
      technology: 'Javascript HTML CSS'
    },
    {
      name: 'Card Matching',
      // tslint:disable-next-line: max-line-length
      description: 'A simple Javascirpt game of matching cards developped using Javascript, Html and CSS.',
      links: {
        github: 'https://github.com/LeBaron88/CardMatchGame',
        site: 'https://lebaron88.github.io/CardMatchGame/'
      },
      imgSrc: '../../assets/images/card.png',
      technology: 'Javascript HTML CSS'
    },
    {
      name: 'Vanessa Guest List',
      // tslint:disable-next-line: max-line-length
      description: 'A ReactJS and ExpressJS app to manage guests attending Vanessa Wedding. The client or front-ent is developed in React while the back-end server is in Express. All data are sitting in the server and are being downloaded and updated via created API.',
      links: {
        github: 'https://github.com/LeBaron88/VanessaGuestListApp',
        site: 'https://pure-oasis-78018.herokuapp.com/'
      },
      imgSrc: '../../assets/images/vanessaGuest.png',
      technology: 'React Express Node HTML CSS'
    },
    {
      name: 'Vanessa Wedding',
      // tslint:disable-next-line: max-line-length
      description: 'A ReactJS and ExpressJS app to manage guests attending Vanessa Wedding. The client or front-ent is developed in React while the back-end server is in Express. All data are sitting in the server and are being downloaded and updated via created API.',
      links: {
        github: 'https://github.com/LeBaron88/vanessa_wedding_website',
        site: 'https://lebaron88.github.io/vanessa_wedding_website/'
      },
      imgSrc: '../../assets/images/vanessaSoleil.png',
      technology: 'Jquery Javascript HTML CSS'
    },
    {
      name: 'Simon Mpoy',
      // tslint:disable-next-line: max-line-length
      description: 'This is my portfolio website built in React for the front-end and Node/Express for the server. I have used Redux to manage my state data.',
      links: {
        github: 'https://github.com/LeBaron88/MyPortfolio',
        site: 'https://mighty-depths-80721.herokuapp.com/'
      },
      imgSrc: '../../assets/images/simonmpoyv1.png',
      technology: 'React Redux Node Express'
    }
  ];

  constructor() { }

  getProjectsSmall(): any[] {
    return this.projects.slice(0, 3);
  }

  getProjectsFull(): any[] {
    return this.projects;
  }
}
