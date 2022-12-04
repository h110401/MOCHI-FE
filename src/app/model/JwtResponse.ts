import {Authority} from "./Authority";

export class JwtResponse {
  id: number;
  token: string;
  username: string;
  name: string;
  avatar: string;
  authorities: Authority[];

  constructor(id: number, token: string, username: string, name: string, avatar: string, authorities: Authority[]) {
    this.id = id;
    this.token = token;
    this.username = username;
    this.name = name;
    this.avatar = avatar;
    this.authorities = authorities;
  }
}
