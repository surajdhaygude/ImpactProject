import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topnavuser',
  templateUrl: './topnavuser.component.html',
  styleUrls: ['./topnavuser.component.css']
})
export class TopnavuserComponent implements OnInit {
  imgurl:string="./assets/Images/logo1.jpg"
  constructor() { }

  ngOnInit(): void {
  }

}
