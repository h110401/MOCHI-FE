import {Component, Input, OnInit} from '@angular/core';
import {TokenService} from "../../service/token/token.service";
import {ChatBoxDetails} from "../../model/chat/ChatBoxDetails";

@Component({
  selector: 'app-chatbox',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.scss']
})
export class ChatBoxComponent implements OnInit {

  @Input() chat_box!: ChatBoxDetails
  avatar = '';
  lastMessageContent = '';
  lastMessageDate = new Date();

  constructor(private tokenService: TokenService) {

  }

  ngOnInit(): void {
    const username = this.tokenService.getUsername();
    if (this.chat_box.users.length > 2) {
      this.avatar = 'https://cdn-icons-png.flaticon.com/512/166/166258.png';
    } else {
      this.avatar = this.chat_box.users[0].username == username ? this.chat_box.users[1].avatar : this.chat_box.users[0].avatar;
    }
    if (this.chat_box.messages.length > 0) {
      let last = this.chat_box.messages[this.chat_box.messages.length - 1];
      this.lastMessageDate = last.created;
      let user = last.user.username == username ? 'You: ' : last.user.lastName + ': ';
      this.lastMessageContent = user + last.content;
      if (this.lastMessageContent.length > 15) {
        this.lastMessageContent = this.lastMessageContent.substring(0,12) + '...'
      }
    }
  }

}
