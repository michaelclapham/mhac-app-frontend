import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HandWashingComponent } from './hand-washing/hand-washing.component';
import { ScanQrComponent } from './scan-qr/scan-qr.component';
import { LyricsComponent } from './lyrics/lyrics.component';
import { SongListComponent } from './song-list/song-list.component';
import { ActivitiesComponent } from './activities/activities.component';
import { CakeComponent } from './cake/cake.component';
import { MedicationRoutineStoryComponent } from './stories/medication-routine-story/medication-routine-story.component';
import { BibiSaraStoryComponent } from './stories/bibi-sara-story/bibi-sara-story.component';
import { StoryListComponent } from './story-list/story-list.component';
import { WhatsappNegativeStoryComponent } from './stories/whatsapp-negative-story/whatsapp-negative-story.component';
import { PuttingOutFireComponent } from './stories/putting-out-fire/putting-out-fire.component';
import { BreadAndBullyStoryComponent } from './stories/bread-and-bully-story/bread-and-bully-story.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'greetings',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'hand-washing',
    component: HandWashingComponent
  },
  {
    path: 'scan-qr',
    component: ScanQrComponent
  },
  {
    path: 'activities',
    component: ActivitiesComponent
  },
  {
    path: 'songs',
    component: SongListComponent
  },
  {
    path: 'song/:id',
    component: LyricsComponent
  },
  {
    path: 'cake',
    component: CakeComponent
  },
  {
    path: 'story/medication-routine',
    component: MedicationRoutineStoryComponent
  },

  {
    path: 'story/bibi-sara-story',
    component : BibiSaraStoryComponent
  }, 

  {
    path: 'story/whatsapp-negative-story',
    component : WhatsappNegativeStoryComponent

  },

  {
    path: 'story/putting-out-fire',
    component : PuttingOutFireComponent
  },

  {
    path: 'story/bread-and-bully-story',
    component : BreadAndBullyStoryComponent
  }, 

  {
    path: 'story-list',
    component : StoryListComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
