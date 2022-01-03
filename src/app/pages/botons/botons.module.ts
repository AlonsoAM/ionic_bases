import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BotonsPageRoutingModule } from './botons-routing.module';

import { BotonsPage } from './botons.page';
import { ComponentsModule } from '../../components/components.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BotonsPageRoutingModule,
    ComponentsModule
  ],
  declarations: [BotonsPage]
})
export class BotonsPageModule {}
