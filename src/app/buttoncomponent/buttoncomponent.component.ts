import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttoncomponent',
  templateUrl: './buttoncomponent.component.html',
  styleUrls: ['./buttoncomponent.component.css']
})
export class ButtoncomponentComponent implements OnInit {

  constructor() { }

  onClick(){
    console.log("Thanks for clicking")
  }
  ngOnInit(): void {
  }

}
