import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IonicModule } from '@ionic/angular';
import { HomeComponent } from './home/home.component';
import { HandWashingComponent } from './hand-washing/hand-washing.component';
import { ScanQrComponent } from './scan-qr/scan-qr.component';
import { GreetingsAdviceComponent } from './greetings-advice/greetings-advice.component';

import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { LyricsComponent } from './lyrics/lyrics.component';
import { CovidTipsComponent } from './covid-tips/covid-tips.component';
import { SongListComponent } from './song-list/song-list.component';
import { ActivitiesComponent } from './activities/activities.component';
import { CakeComponent } from './cake/cake.component';
import { MedicationRoutineStoryComponent } from './stories/medication-routine-story/medication-routine-story.component';
import { BibiSaraStoryComponent } from './stories/bibi-sara-story/bibi-sara-story.component';
import { StoryListComponent } from './story-list/story-list.component';
import { WhatsappNegativeStoryComponent } from './stories/whatsapp-negative-story/whatsapp-negative-story.component';
import { PuttingOutFireComponent } from './stories/putting-out-fire/putting-out-fire.component';
import { BreadAndBullyStoryComponent } from './stories/bread-and-bully-story/bread-and-bully-story.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HandWashingComponent,
    ScanQrComponent,
    GreetingsAdviceComponent,
    LyricsComponent,
    CovidTipsComponent,
    SongListComponent,
    ActivitiesComponent,
    CakeComponent,
    MedicationRoutineStoryComponent,
    BibiSaraStoryComponent,
    StoryListComponent,
    WhatsappNegativeStoryComponent,
    PuttingOutFireComponent,
    BreadAndBullyStoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IonicModule.forRoot(),
    ZXingScannerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
