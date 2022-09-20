import { SlotPageComponent } from './slot-page/slot-page.component';
import { LobbyPageComponent } from './lobby-page/lobby-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: LobbyPageComponent },
  { path: 'slots/:id', component: SlotPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
