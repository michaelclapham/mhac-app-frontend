import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bibi-sara-story',
  templateUrl: './bibi-sara-story.component.html',
  styleUrls: ['./bibi-sara-story.component.scss']
})
export class BibiSaraStoryComponent implements OnInit {
  
  slideOpts = {
    initialSlide: 0,
    speed: 400
  };

  constructor() { }

  ngOnInit(): void {
  }

}
