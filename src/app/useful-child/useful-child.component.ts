import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-useful-child',
  templateUrl: './useful-child.component.html',
  styleUrls: ['./useful-child.component.css']
})
export class UsefulChildComponent {
  @Input() mydata: any;
  // console.log(mydata);
  
}
