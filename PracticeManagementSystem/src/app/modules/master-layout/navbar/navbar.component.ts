import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  imgurl:string="./assets/Images/logo1.jpg"
  constructor( private route:Router) { }

  ngOnInit(): void {
  }

  SignOut(){
   this.route.navigateByUrl('');
  }

}
