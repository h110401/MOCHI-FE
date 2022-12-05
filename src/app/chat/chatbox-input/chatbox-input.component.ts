import {Component, Input, OnInit} from '@angular/core';
import {ChatService} from "../chat.service";
import {ChatObject} from "../../model/chat/ChatObject";
import {ChatBoxDetails} from "../../model/chat/ChatBoxDetails";

@Component({
  selector: 'app-chatbox-input',
  templateUrl: './chatbox-input.component.html',
  styleUrls: ['./chatbox-input.component.scss']
})
export class ChatBoxInputComponent implements OnInit {
  @Input() chat_box: ChatBoxDetails | undefined;

  constructor(private chatService: ChatService) {
  }

  ngOnInit(): void {
  }

  send(input: any) {
    if (this.chat_box != undefined) {
      const chatObject: ChatObject = {
        message: input.value,
        chatBox: this.chat_box.chatBox
      }
      this.chatService.sendMessageToChatBox(chatObject);
    }
    input.value = '';
  }
}
