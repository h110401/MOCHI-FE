import {User} from "./User";

export interface Message {
  id: number;
  created: Date;
  content: string;
  user: User;
}
