import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {User} from "../../model/chat/User";

const API_CHANGE_AVATAR = environment.API + '/api/profile/avatar'

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) {
  }

  profile(username: string) {
    return this.http.get<User>(environment.API + '/api/profile/' + username);
  }

  changeAvatar(url: string) {
    return this.http.put(API_CHANGE_AVATAR, {avatar: url})
  }
}
