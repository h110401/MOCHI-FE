import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../service/auth/auth.service";
import {UserService} from "../../service/user/user.service";
import {User} from "../../model/chat/User";

@Component({
  selector: 'app-friend-list',
  templateUrl: './friend-list.component.html',
  styleUrls: ['./friend-list.component.scss']
})
export class FriendListComponent implements OnInit {
  username = '';
  data: User[] = [];

  constructor(private router: Router,
              private userService: UserService) {
    let strings = router.url.split('/');
    this.username = strings[2];
    userService.friendList(this.username).subscribe({
      next: (data) => {
        console.log(data);
        this.data = data;
      }
    })
  }

  ngOnInit(): void {
  }

}
