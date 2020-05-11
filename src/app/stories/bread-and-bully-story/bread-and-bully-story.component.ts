import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bread-and-bully-story',
  templateUrl: './bread-and-bully-story.component.html',
  styleUrls: ['./bread-and-bully-story.component.scss']
})
export class BreadAndBullyStoryComponent implements OnInit {
  
  slideOpts = {
    initialSlide: 0,
    speed: 400
  };
  constructor() { }

  ngOnInit(): void {
  }

}
