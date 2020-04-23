import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HandWashingComponent } from './hand-washing/hand-washing.component';
import { ScanQrComponent } from './scan-qr/scan-qr.component';
import { LyricsComponent } from './lyrics/lyrics.component';
import { SongListComponent } from './song-list/song-list.component';
import { ActivitiesComponent } from './activities/activities.component';
import { CakeComponent } from './cake/cake.component';


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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
