import {Socket} from "ngx-socket-io";

export class MySocket extends Socket {
  constructor(url: string) {
    super({
      url: url
    });
  }
}
