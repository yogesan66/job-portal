import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent  implements OnInit{
  userEmailId:any;

  ngOnInit(): void {
    this.userEmailId =localStorage.getItem('emailId')
    console.log('from nav',this.userEmailId)
  }

  constructor(){}

}
