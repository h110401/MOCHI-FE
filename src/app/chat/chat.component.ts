import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ChatService} from "./chat.service";
import {ChatBoxDetails} from "../model/chat/ChatBoxDetails";
import {ResponseChatObject} from "../model/chat/ResponseChatObject";
import {NgxSpinner, NgxSpinnerService} from "ngx-spinner";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit, AfterViewInit {
  chat_boxes: ChatBoxDetails[] = [];
  current: ChatBoxDetails | undefined;

  constructor(private chatService: ChatService,
              private spinner: NgxSpinnerService) {

    spinner.show();

    chatService.chatBoxList().subscribe({
      next: (data) => {
        this.chat_boxes = data
      }, complete: () => {
        let item = sessionStorage.getItem("CURRENT_CHAT_BOX");
        if (item) {
          for (let cb of this.chat_boxes) {
            if (cb.chatBox.id == Number(item)) {
              this.current = cb;
            }
          }
        }
      }
    });

    chatService.socket.on('receive_message', (data: ResponseChatObject) => {
      for (let cb of this.chat_boxes) {
        if (cb.chatBox.id == data.chatBox.id) {
          cb.messages.push(data.message);
        }
      }
    });
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.spinner.hide();
  }

}
