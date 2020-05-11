import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-putting-out-fire',
  templateUrl: './putting-out-fire.component.html',
  styleUrls: ['./putting-out-fire.component.scss']
})
export class PuttingOutFireComponent implements OnInit {

  slideOpts = {
    initialSlide: 0,
    speed: 400
  };
  constructor() { }

  ngOnInit(): void {
  }

}
