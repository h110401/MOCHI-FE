import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {TokenService} from "../../service/token/token.service";
import {Socket} from "ngx-socket-io";
import {ChatService} from "../../chat/chat.service";
import {Subscription} from "rxjs";
import {MySocket} from "../../socket";
import {BreakpointObserver} from "@angular/cdk/layout";
import {NgxNavbarCollapseComponent} from "ngx-bootstrap-navbar";
import {UserService} from "../../service/user/user.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  unread = false;
  subscription: Subscription;
  socket: MySocket;
  username = ''
  @ViewChild(NgxNavbarCollapseComponent) collapse!: NgxNavbarCollapseComponent;

  constructor(private router: Router,
              private tokenService: TokenService,
              private chatService: ChatService,
              private userService: UserService) {
    this.username = tokenService.getUsername();
    this.socket = chatService.socket;
    this.subscription = chatService.have_unread_message.subscribe({
      next: (data) => {
        this.unread = data;
      }
    });
    this.socket.on('receive_message', () => {
      if (!this.router.url.startsWith('/chat')) {
        this.unread = true;
      }
    });
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

  collapseNav() {
    if (!this.collapse.isCollapsed) {
      this.collapse.close();
    }
  }

  searchUser(search: any) {
    this.collapseNav();
    let input = search.value;
    search.value = '';
    this.router.navigate(['/search/' + input])
  }
}
