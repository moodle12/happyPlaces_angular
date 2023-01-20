import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FeedbackService } from 'src/app/feedback.service';
import { UserserviceService } from 'src/app/userservice.service';
import { VendorService } from 'src/app/vendor.service';
@Component({
  selector: 'app-addfeedback',
  templateUrl: './addfeedback.component.html',
  styleUrls: ['./addfeedback.component.css']
})
export class AddfeedbackComponent implements OnInit {

  constructor(private userservice:UserserviceService,private router:Router,private vendorservice:VendorService,private feedbackservice:FeedbackService) { }
  users:Array<any> = []
  // vendors:Array<any> = []
  user=""
  business=""
  businessStars=0
  comment=""
  isVisible=""

  ngOnInit(): void {
    this.userservice.getAllUsersApi().subscribe(resp => {
      this.users = resp.data;
      console.log(this.users);
    })
    // this.vendorservice.getAllVendorsApi().subscribe(resp =>{
    //   this.business=resp.data;
    // })
  }

  addFeedback()
  {
    let data={
      "user":this.user,
      "business":this.business,
      "businessStars":this.businessStars,
      "comment":this.comment,
      "isVisible":this.isVisible
    }
    this.feedbackservice.FeedbackApi(data).subscribe(resp=>{
      console.log(resp);
    })
  }

}
