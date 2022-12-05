import {ChatBox} from "./ChatBox";
import {User} from "./User";
import {Message} from "./Message";
import {ChatBoxStatus} from "./ChatBoxStatus";

export interface ChatBoxDetails {
  id: number;
  chatBox: ChatBox;
  status: ChatBoxStatus;
  messages: Message[];
  users: User[];
}

