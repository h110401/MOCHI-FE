import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../service/user/user.service";
import {Subscription} from "rxjs";
import {User} from "../model/chat/User";
import {TokenService} from "../service/token/token.service";

export interface ResponseSearchUser {
  user: User;
  status: string;
}

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {
  datas: ResponseSearchUser[] = [];
  subscription: Subscription;
  username = '';

  constructor(private route: ActivatedRoute,
              private userService: UserService,
              private tokenService: TokenService) {
    this.username = tokenService.getUsername();
    this.subscription = route.params.subscribe({
      next: (data: any) => {
        let search = data.search;
        userService.searchUser(search).subscribe({
          next: (data) => {
            if (data != null) {
              console.log(data)
              this.datas = data;
            }
          }
        })
      },
    })
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  sendFriendRequest(data: ResponseSearchUser) {
    this.userService.sendFriendRequest(data.user.id).subscribe({
      next: (res: any) => {
        console.log(res.message);
        if (res.message == 'request_sent') {
          data.status = 'SENT';
        }
        if (res.message == 'request_retrieved' || res.message == 'request_declined') {
          data.status = 'NOT_FRIEND';
        }
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

  acceptFriendRequest(data: ResponseSearchUser) {
    this.userService.acceptFriendRequest(data.user.id).subscribe({
      next: (res) => {
        data.status = 'FRIEND';
      }
    })
  }
}
