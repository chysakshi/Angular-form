import { Component } from '@angular/core';
import { NgForm} from '@angular/forms'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Basic_form';
  userData:any={};

  getData(data:NgForm)
  {
    console.warn(data)
    this.userData=data

  } 
  title1 = 'toggle';
  display = true;
  submit()
  {
    this.display=!this.display;
  }

  
}
