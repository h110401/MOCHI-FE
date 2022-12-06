import {Component, OnInit} from '@angular/core';
import {User} from "../model/chat/User";
import {ActivatedRoute, Router} from "@angular/router";
import {ProfileService} from "../service/profile/profile.service";
import {AuthService} from "../service/auth/auth.service";
import {UploadService} from "../service/upload/upload.service";
import {TokenService} from "../service/token/token.service";
import {Subscription} from "rxjs";
import {MatDialog} from "@angular/material/dialog";
import {ChangeAvatarDialog} from "./change-avatar/change-avatar-dialog";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  user: User | undefined;
  isUserLogin = false;

  constructor(private route: ActivatedRoute,
              private profileService: ProfileService,
              private authService: AuthService,
              private uploadService: UploadService,
              private tokenService: TokenService,
              private router: Router,
              private dialog: MatDialog) {
  }

  ngOnInit(): void {
    let username = this.route.snapshot.paramMap.get('username');
    if (username != null) {
      this.profileService.profile(username).subscribe({
        next: (data) => {
          this.user = data;
        }, error: (err) => {
          this.router.navigate(['error']);
        }
      })
    }
    this.authService.auth().subscribe({
      next: (data) => {
        this.isUserLogin = data.username == username;
      }
    })
  }


  fileChangeEvent(event: any): void {
    const dialogRef = this.dialog.open(ChangeAvatarDialog, {
      data: event
    })
    dialogRef.afterClosed().subscribe(url => {
      if (this.user != undefined && url) {
        this.user.avatar = url
      }
      event.target.value = '';
    })
  }
}
