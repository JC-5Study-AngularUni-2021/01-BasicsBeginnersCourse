import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boiler-plate',
  templateUrl: './boiler-plate.component.html',
  styleUrls: ['./boiler-plate.component.css']
})
export class BoilerPlateComponent implements OnInit {
  title: string = `Justin's`;
  
  constructor() { }

  ngOnInit(): void {
  }

}
