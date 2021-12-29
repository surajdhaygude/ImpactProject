import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthservicesService } from 'src/app/authservices.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  imgurl:string="./assets/Images/logo1.jpg"
  constructor( private route:Router,private service:AuthservicesService) { }

  ngOnInit(): void {
  }

  SignOut(){
    this.service.logout();
   this.route.navigateByUrl('');
  }

}
