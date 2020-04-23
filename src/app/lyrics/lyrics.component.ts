import { Component, OnInit, ViewChild } from '@angular/core';
import { Ay_Gazoomba, Oh_Ram_Sam_Sam, Zum_Gali_Gali, Baba_La_Gumbala, Bella_Mama } from './songs';
import { Ay_Ga_Zoomba_Instructions } from './songs/ay_ga_zoomba_with_instructions';
import { Song, Zum_Gali_Gali_Instructions } from './songs/zum_gali_gali_with_instructions';
import { ActivatedRoute, Router, NavigationStart } from '@angular/router';
import { Baba_La_Gumbala_Instructions } from './songs/baba_la_gumbala_instructions';


@Component({
  selector: 'app-lyrics',
  templateUrl: './lyrics.component.html',
  styleUrls: ['./lyrics.component.scss']
})
export class LyricsComponent implements OnInit {

  songAudioURL: string = "assets/audio/Zum_Gali_Gali_Instructions.mp3";
  currentSong: Song = Zum_Gali_Gali_Instructions;

  currentTime: number = 0;

  hasInstructions: boolean = false;
  hasTwoPeople: boolean = false;

  lyricLinesInstructions: string[] = [];
  lyricLinesPerson1: string[] = [];
  lyricLinesPerson2: string[] = [];

  lyricPerson1Color: string = "white";
  lyricPerson2Color: string = "white";

  @ViewChild("audioElem") audioVC: { nativeElement: HTMLAudioElement};

  paused: boolean = false;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.params.subscribe(params => {
      if (params["id"] === "2") {
        this.songAudioURL = "assets/audio/Ay_Ga_Zoomba.mp3";
        this.currentSong = Ay_Gazoomba;
      } else
      if (params["id"] === "3") {
        this.songAudioURL = "assets/audio/Baba_La_Gumbala_Instructions.mp3";
        this.currentSong = Baba_La_Gumbala_Instructions;
      }
    });
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
          this.audioVC.nativeElement.pause();
          this.audioVC.nativeElement.currentTime = 0;
      }
  });
    
  }

  ngOnInit(): void {
  }

  toggleAudio() {
    if (this.paused) {
      this.audioVC.nativeElement.play();
      this.paused = false;
    } else {
      this.audioVC.nativeElement.pause();
      this.paused = true;
    }
  }

  pickRandom(list: string[]): string {
    const randomIndex = Math.ceil(Math.random() * list.length - 0.00000001) - 1;
    console.log("Random!", randomIndex, list[randomIndex]);
    return list[randomIndex];
  }

  onAudioTimeUpdate(elem: HTMLAudioElement) {
    var audioCurrentTimeSec = elem.currentTime;
    for (var lyric of this.currentSong.lyrics) {
      var startTimeSec: number = parseInt(lyric.startTimeMinute) * 60 + parseInt(lyric.startTimeSecond);
      var endTimeSec: number = parseInt(lyric.endTimeMinute) * 60 + parseInt(lyric.endTimeSecond);
      if (audioCurrentTimeSec >= startTimeSec && audioCurrentTimeSec <= endTimeSec) {
        var newLines = lyric.lyric.split("\n");
        if (lyric.isInstructions && lyric.isInstructions.trim().toLowerCase() === "true") {
          this.hasInstructions = true;
          this.lyricLinesInstructions = newLines;
        } else
        if (lyric.person === "2") {
          this.hasTwoPeople = true;
          if (newLines[0] && newLines[0] !== this.lyricLinesPerson2[0]) {
            this.lyricPerson2Color = this.pickRandom(["lightpink", "pink", "darkred", "black", "white"]);
          }
          this.lyricLinesPerson2 = newLines;
        } else {
          var newLines = lyric.lyric.split("\n");
          if (newLines[0] && newLines[0] !== this.lyricLinesPerson1[0]) {
            this.lyricPerson1Color = this.pickRandom(["skyblue", "cyan", "blue", "lightblue", "teal", "black", "white"]);
          }
          this.lyricLinesPerson1 = newLines;
        }
      }
    }
  }

}
