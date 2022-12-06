import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {User} from "../../model/chat/User";
import {ResponseSearchUser} from "../../search/search.component";

const API_SEARCH = (search: string) => environment.API + '/api/users/search/' + search;
const API_SEND_FRIEND_REQUEST = (id: number) => environment.API + '/api/friends/send/' + id;
const API_ACCEPT_FRIEND_REQUEST = (id: number) => environment.API + '/api/friends/accept/' + id;
const API_FRIEND_LIST = (username: string) => environment.API + '/api/friends/list/' + username;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  searchUser(search: string) {
    return this.http.get<ResponseSearchUser[]>(API_SEARCH(search));
  }

  sendFriendRequest(id: number) {
    return this.http.post(API_SEND_FRIEND_REQUEST(id), {});
  }

  acceptFriendRequest(id: number) {
    return this.http.put(API_ACCEPT_FRIEND_REQUEST(id), {});
  }

  friendList(username: string) {
    return this.http.get<User[]>(API_FRIEND_LIST(username));
  }
}
