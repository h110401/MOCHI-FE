import {ChatBox} from "./ChatBox";
import {Message} from "./Message";

export interface ResponseChatObject {
  message: Message;
  chatBox: ChatBox;
}
