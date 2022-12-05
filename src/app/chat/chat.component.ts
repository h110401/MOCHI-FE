import {Component, OnInit} from '@angular/core';
import {ChatService} from "./chat.service";
import {ChatBoxDetails} from "../model/chat/ChatBoxDetails";
import {ResponseChatObject} from "../model/chat/ResponseChatObject";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  chat_boxes: ChatBoxDetails[] = [];
  current = null;

  constructor(private chatService: ChatService) {
    chatService.chatBoxList().subscribe({
      next: (data) => {
        this.chat_boxes = data
      }
    });
    chatService.socket.on('receive_message', (data: ResponseChatObject) => {
      console.log(data);
      for (let cb of this.chat_boxes) {
        if (cb.chatBox.id == data.chatBox.id) {
          cb.messages.push(data.message);
        }
      }
    })
  }

  ngOnInit(): void {

  }

}
