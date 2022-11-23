import { Component, OnInit } from '@angular/core';
import { PlaceserviceService } from 'src/app/placeservice.service';

@Component({
  selector: 'app-list-places',
  templateUrl: './list-places.component.html',
  styleUrls: ['./list-places.component.css']
})
export class ListPlacesComponent implements OnInit {

  constructor(private placeService:PlaceserviceService) { }
  places: Array<any> = []
  ngOnInit(): void {
    this.placeService.getAllPlacesApi().subscribe(resp => {
      this.places = resp.data;
      console.log(this.places);

    })
  }

}
