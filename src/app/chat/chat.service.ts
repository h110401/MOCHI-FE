import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {TokenService} from "../service/token/token.service";
import {BehaviorSubject} from "rxjs";
import {MySocket} from "../socket";
import {ChatBoxDetails} from "../model/chat/ChatBoxDetails";
import {ChatObject} from "../model/chat/ChatObject";
import {Message} from "../model/chat/Message";


@Injectable({
  providedIn: 'root'
})
export class ChatService {
  socket: MySocket;
  unread = new BehaviorSubject(false);
  have_unread_message = this.unread.asObservable();

  constructor(private http: HttpClient,
              private tokenService: TokenService) {

    let url = environment.API_SOCKET + '/chat/' + this.tokenService.getUsername();
    this.socket = new MySocket(url);
    this.connect();
  }

  connect() {
    this.http.get(environment.API + '/ws/connect').subscribe({
      next: (data) => {
        if (data == true) {
          this.unread.next(true);
        }
      },
      complete: () => {
        console.log('connected')
      }
    });
  }

  chatBoxList() {
    return this.http.get<ChatBoxDetails[]>(environment.API + '/ws/chat_boxes');
  }

  sendMessageToChatBox(chatObject: ChatObject) {
    this.http.post(environment.API + '/ws/send_message', chatObject).subscribe();
  }

  read(id: number) {
    this.http.put(environment.API + '/ws/read/' + id, {}).subscribe()
  }

}
