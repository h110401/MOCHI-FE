import {ChatBox} from "./ChatBox";
import {User} from "./User";
import {Message} from "./Message";

export interface ChatBoxDetails {
  id: number;
  chatBox: ChatBox;
  status: string;
  messages: Message[];
  users: User[];
}

