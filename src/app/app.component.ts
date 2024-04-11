import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todoapp1';


  public items: any = [];

  addData(data: any) {


    this.items.push(data);
    console.log(this.items);
  }

  deleteData(data: any) {
    let index = this.items.indexOf(data);
    if (index !== -1) {
      this.items.splice(index, 1);
      console.log(`Deleted ${data}`);
    }
  }
}
