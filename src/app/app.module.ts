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
    CakeComponent
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
