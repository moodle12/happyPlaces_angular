import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'happyPlaces-angular';
  route: string="";
  isHome=false;
  constructor(location: Location, router: Router) {
    router.events.subscribe((val) => {
      if(location.path() != ''){
        this.route = location.path();
        if(this.route=="/customer/home" || this.route=="/customer/tours")
    {
      this.isHome=false
    }
    else{
      this.isHome=true
    }
      } else {
        this.route = 'Home'
      }
    });
  }
}
