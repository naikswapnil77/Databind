import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
appName = "My first app in Angular 8"; 
userName:string = "Peter"; 
myCSSClass = "red"; 
myColor = 'brown';
   applyCSSClass = false; 
  constructor() { }

  ngOnInit() {
	  
  }
  
   showData($event: any){ 
      console.log("button is clicked!"); if($event) { 
         console.log($event.target); 
         console.log($event.target.value); 
      } 
   }

}
