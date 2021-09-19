import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }
  category : string  | any = "all";

  ngOnInit(): void {
  }

  f(s:any){
    
    this.category = s;
    // console.log(this.category);
  }
}
