import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatRoutingModule } from './chat-routing.module';
import { ChatComponent } from './chat.component';
import {FormsModule} from "@angular/forms";
import { ChatBoxComponent } from './chatbox-navbar/chat-box.component';
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatCardModule} from "@angular/material/card";
import {DateAgoPipe} from "../pipes/date-ago.pipe";
import { ChatBoxMessageComponent } from './chatbox-message/chatbox-message.component';
import { ChatBoxInputComponent } from './chatbox-input/chatbox-input.component';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {NgxAutoScrollModule} from "ngx-auto-scroll";
import {NgxSpinnerModule} from "ngx-spinner";


@NgModule({
  declarations: [
    ChatComponent,
    ChatBoxComponent,
    DateAgoPipe,
    ChatBoxMessageComponent,
    ChatBoxInputComponent,
  ],
  imports: [
    CommonModule,
    ChatRoutingModule,
    FormsModule,
    MatButtonToggleModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    NgxAutoScrollModule,
    NgxSpinnerModule
  ],
})
export class ChatModule { }
