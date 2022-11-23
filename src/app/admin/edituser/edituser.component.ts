import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {
  userid:String=""
  constructor(private ar:ActivatedRoute) { }

  ngOnInit(): void {
    this.userid=this.ar.snapshot.params.userid
    alert(this.userid)
  }

}
