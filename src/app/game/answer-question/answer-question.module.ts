import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CountdownModule } from 'ngx-countdown';


import { IonicModule } from '@ionic/angular';

import { AnswerQuestionPageRoutingModule } from './answer-question-routing.module';

import { AnswerQuestionPage } from './answer-question.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnswerQuestionPageRoutingModule,
    ReactiveFormsModule,
    CountdownModule,
  ],
  declarations: [AnswerQuestionPage]
})
export class AnswerQuestionPageModule {}
