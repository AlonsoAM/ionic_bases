import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BotonsPage } from './botons.page';

const routes: Routes = [
  {
    path: '',
    component: BotonsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BotonsPageRoutingModule {}
