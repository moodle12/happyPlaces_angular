import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlaceserviceService } from 'src/app/placeservice.service';

@Component({
  selector: 'app-add-places',
  templateUrl: './add-places.component.html',
  styleUrls: ['./add-places.component.css']
})
export class AddPlacesComponent implements OnInit {
  placeName:String="";
  lat:String="";
  long:String="";
  title:String="";
  description:String="";
  totalSeats:Number=0;
  totalPrice:Number=0;
  totalDay:Number=0;
  totalNight:Number=0;
  specialInstruction:String="";
  constructor(private router:Router,private placeservice:PlaceserviceService) { }

  ngOnInit(): void {
  }

  addplace()
  {
    let data= {
      "placeName":this.placeName,
      "lat":this.lat,
      "long":this.long,
      "title":this.title,
      "description":this.description,
      "totalSeats":this.totalSeats,
      "totalPrice":this.totalPrice,
      "totalDay":this.totalDay,
      "totalNight":this.totalNight,
      "specialInstruction":this.specialInstruction
    }

    this.placeservice.placeApi(data).subscribe(res=>{
      console.log("place response ");
      console.log(res);
   });
  }

}
