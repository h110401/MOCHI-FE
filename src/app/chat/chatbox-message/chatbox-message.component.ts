import {AfterViewInit, Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {TokenService} from "../../service/token/token.service";
import {ChatBoxDetails} from "../../model/chat/ChatBoxDetails";
import {NgxAutoScroll} from "ngx-auto-scroll";
import {Message} from "../../model/chat/Message";

@Component({
  selector: 'app-chatbox-message',
  templateUrl: './chatbox-message.component.html',
  styleUrls: ['./chatbox-message.component.scss']
})
export class ChatBoxMessageComponent implements OnInit, OnChanges {
  @Input() chat_box: ChatBoxDetails | undefined;
  @ViewChild(NgxAutoScroll) viewChild!: NgxAutoScroll;
  username = '';
  lock_y_offset = 10;

  constructor(private tokenService: TokenService) {
    this.username = tokenService.getUsername();
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.viewChild != undefined) {
      this.viewChild.forceScrollDown();
    }
  }
}
