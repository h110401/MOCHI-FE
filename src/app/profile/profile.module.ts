import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ProfileRoutingModule} from './profile-routing.module';
import {ProfileComponent} from './profile.component';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {ImageCropperModule} from "ngx-image-cropper";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatIconModule} from "@angular/material/icon";
import {ChangeAvatarDialog} from "./change-avatar/change-avatar-dialog";
import {MatDialogModule} from "@angular/material/dialog";
import {MatDividerModule} from "@angular/material/divider";
import {NgxNavbarModule} from "ngx-bootstrap-navbar";
import { FriendListComponent } from './friend-list/friend-list.component';


@NgModule({
  declarations: [
    ProfileComponent,
    ChangeAvatarDialog,
    FriendListComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    MatCardModule,
    MatButtonModule,
    ImageCropperModule,
    MatProgressBarModule,
    MatIconModule,
    MatDialogModule,
    MatDividerModule,
    NgxNavbarModule
  ]
})
export class ProfileModule {
}
