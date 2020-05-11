import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-medication-routine-story',
  templateUrl: './medication-routine-story.component.html',
  styleUrls: ['./medication-routine-story.component.scss']
})
export class MedicationRoutineStoryComponent implements OnInit {

  // Optional parameters to pass to the swiper instance. See http://idangero.us/swiper/api/ for valid options.
  slideOpts = {
    initialSlide: 0,
    speed: 400
  };

  constructor() { }

  ngOnInit(): void {
  }

}
