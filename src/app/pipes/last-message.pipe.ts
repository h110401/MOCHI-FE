import {Pipe, PipeTransform} from '@angular/core';
import {Message} from "../model/chat/Message";
import {TokenService} from "../service/token/token.service";

@Pipe({
  name: 'lastMessage'
})
export class LastMessagePipe implements PipeTransform {

  constructor(private tokenService: TokenService) {
  }

  transform(message: Message | undefined, ...args: unknown[]): string {
    let username = this.tokenService.getUsername();

    if (message == undefined) {
      return '';
    }

    let rs = (message.user.username == username ? 'You: ' : message.user.lastName + ': ') + message.content;

    return rs.length > 15 ? rs.substring(0, 12) + '...' : rs;
  }

}
