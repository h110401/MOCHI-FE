import {Component, Input, OnInit} from '@angular/core';
import {TokenService} from "../../service/token/token.service";
import {ChatBoxDetails} from "../../model/chat/ChatBoxDetails";
import {Message} from "../../model/chat/Message";

@Component({
  selector: 'app-chatbox',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.scss']
})
export class ChatBoxComponent implements OnInit {

  @Input() chat_box: any;
  @Input() lastMessage: Message | undefined;
  avatar = '';

  constructor(private tokenService: TokenService) {

  }

  ngOnInit(): void {
    console.log('chat box', this.chat_box);
    const username = this.tokenService.getUsername();
    if (this.chat_box.users.length > 2) {
      this.avatar = 'https://cdn-icons-png.flaticon.com/512/166/166258.png';
    } else {
      this.avatar = this.chat_box.users[0].username == username ? this.chat_box.users[1].avatar : this.chat_box.users[0].avatar;
    }
  }

}
