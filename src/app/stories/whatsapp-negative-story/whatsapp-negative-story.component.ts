import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-whatsapp-negative-story',
  templateUrl: './whatsapp-negative-story.component.html',
  styleUrls: ['./whatsapp-negative-story.component.scss']
})
export class WhatsappNegativeStoryComponent implements OnInit {

  slideOpts = {
    initialSlide: 0,
    speed: 400
  };
  constructor() { }

  ngOnInit(): void {
  }
}
