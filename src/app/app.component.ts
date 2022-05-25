import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'binding';
  public name = "Angular demo";
  public topic = "Data binding";
  public image = "assets/yoada.jpeg";
  public random = "";
}
