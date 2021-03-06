import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RateAnswersPageRoutingModule } from './rate-answers-routing.module';

import { RateAnswersPage } from './rate-answers.page';
import { CountdownModule } from 'ngx-countdown';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RateAnswersPageRoutingModule,
    ReactiveFormsModule,
    CountdownModule,
  ],
  declarations: [RateAnswersPage]
})
export class RateAnswersPageModule {}
