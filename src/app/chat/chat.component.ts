import {Component, OnInit} from '@angular/core';
import {ChatService} from "./chat.service";
import {ChatBoxDetails} from "../model/chat/ChatBoxDetails";
import {ResponseChatObject} from "../model/chat/ResponseChatObject";

const CURRENT_CHAT_BOX_KEY = 'CURRENT_CHAT_BOX_KEY'

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  chat_boxes: ChatBoxDetails[] = [];
  current: ChatBoxDetails | undefined;

  constructor(private chatService: ChatService) {

    chatService.chatBoxList().subscribe({
      next: (data) => {
        this.chat_boxes = data
      }, complete: () => {
        let item = sessionStorage.getItem(CURRENT_CHAT_BOX_KEY);
        if (item != null) {
          let readAll = true;
          for (let cb of this.chat_boxes) {
            if (cb.chatBox.id == Number(item)) {
              chatService.read(cb.id);
              cb.status = 'READ'
              this.current = cb;
            }
            if (cb.status == 'UNREAD') readAll = false;
          }
          if (readAll) chatService.unread.next(false);
        }
      }
    });

    chatService.socket.on('receive_message', (data: ResponseChatObject) => {
      for (let cb of this.chat_boxes) {
        if (cb.chatBox.id == data.chatBox.id) {
          cb.messages.push(data.message);
          if (cb.id != this.current?.id) {
            cb.status = 'UNREAD';
            chatService.unread.next(true);
            console.log('vao day')
          }
        }
      }

    });
  }

  ngOnInit(): void {
  }

  onButtonToggleChange($event: any) {
    let details = ($event.value as ChatBoxDetails);
    let readAll = true;
    for (let cb of this.chat_boxes) {
      if (cb.id == details.id) {
        this.chatService.read(cb.id);
        cb.status = 'READ';
      }
      if (cb.status == 'UNREAD') {
        readAll = false;
      }
    }

    if (readAll) {
      this.chatService.unread.next(false);
    }

    let id = details.chatBox.id;
    sessionStorage.setItem(CURRENT_CHAT_BOX_KEY, String(id));
  }
}
