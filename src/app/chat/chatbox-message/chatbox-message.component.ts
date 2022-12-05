import {Component, Input, OnInit} from '@angular/core';
import {TokenService} from "../../service/token/token.service";
import {ChatBoxDetails} from "../../model/chat/ChatBoxDetails";

@Component({
  selector: 'app-chatbox-message',
  templateUrl: './chatbox-message.component.html',
  styleUrls: ['./chatbox-message.component.scss']
})
export class ChatBoxMessageComponent implements OnInit {
  @Input() chat_box!: ChatBoxDetails;
  username = '';

  constructor(private tokenService: TokenService) {
    this.username = tokenService.getUsername();
  }

  ngOnInit(): void {
  }

}
