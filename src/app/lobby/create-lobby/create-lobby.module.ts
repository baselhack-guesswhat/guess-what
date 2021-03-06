import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateLobbyPageRoutingModule } from './create-lobby-routing.module';

import { CreateLobbyPage } from './create-lobby.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    CreateLobbyPageRoutingModule,
  ],
  declarations: [CreateLobbyPage]
})
export class CreateLobbyPageModule {}
