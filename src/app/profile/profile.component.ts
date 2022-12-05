import {Component, OnInit} from '@angular/core';
import {User} from "../model/chat/User";
import {ActivatedRoute} from "@angular/router";
import {ProfileService} from "../service/user/profile.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user: User | undefined;

  constructor(private route: ActivatedRoute,
              private profileService: ProfileService) {
  }

  ngOnInit(): void {
    let username = this.route.snapshot.paramMap.get('username');
    if (username != null) {
      this.profileService.profile(username).subscribe({
        next: (data) => {
          this.user = data
        }, error: (err) => {
          console.log(err.error.message);
        }
      })
    }
  }

}
