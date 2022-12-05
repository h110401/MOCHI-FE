import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {TokenService} from "../../service/token/token.service";
import {Socket} from "ngx-socket-io";
import {ChatService} from "../../chat/chat.service";
import {Subscription} from "rxjs";
import {MySocket} from "../../socket";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  unread = false;
  subscription: Subscription;
  socket: MySocket;

  constructor(private router: Router,
              private tokenService: TokenService,
              private chatService: ChatService) {

    this.socket = chatService.socket;
    this.subscription = chatService.have_unread_message.subscribe({
      next: (data) => {
        this.unread = data;
      }
    })
  }

  ngOnInit(): void {
  }

  logout() {
    this.tokenService.remove();
    this.router.navigate(['/login']);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
