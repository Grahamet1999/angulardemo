import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-imagecomponent',
  templateUrl: './imagecomponent.component.html',
  styleUrls: ['./imagecomponent.component.css']
})
export class ImagecomponentComponent implements OnInit {

  public image="assets/yoada.jpeg";

  constructor() { }

  ngOnInit(): void {
  }

}
