import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FeedbackService } from 'src/app/feedback.service';
import { VendorService } from 'src/app/vendor.service';
import { UserserviceService } from 'src/app/userservice.service';

@Component({
  selector: 'app-listfeedbacks',
  templateUrl: './listfeedbacks.component.html',
  styleUrls: ['./listfeedbacks.component.css']
})
export class ListfeedbacksComponent implements OnInit {

  constructor(private feedbackservice:FeedbackService,private router:Router,private vendorservice:VendorService,private userservice:UserserviceService) { }
  feedbacks: Array<any> = []
  vendors: Array<any> = []
  users: Array<any> = []
  ngOnInit(): void {
    this.feedbackservice.getAllFeedbacksApi().subscribe(resp=>{
      this.feedbacks=resp.data
      console.log(this.feedbacks);
    })
    this.vendorservice.getAllVendorsApi().subscribe(resp =>{
      this.vendors=resp.data;
      console.log(this.vendors);

    })
    this.userservice.getAllUsersApi().subscribe(resp => {
      this.users = resp.data;
      console.log(this.users);
    })
  }

}
