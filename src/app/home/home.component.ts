import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  title = "List of courses";
  imageUrl = "https://picsum.photos/200/300";

  onSave($event: Event){
    console.log($event);
  }

}
