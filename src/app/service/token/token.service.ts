import { Injectable } from '@angular/core';
import {Authority} from "../../model/Authority";
import {JwtResponse} from "../../model/JwtResponse";

const ID_KEY = 'ID_KEY';
const TOKEN_KEY = 'TOKEN_KEY';
const USERNAME_KEY = 'USERNAME_KEY';
const NAME_KEY = 'NAME_KEY';
const AVATAR_KEY = 'AVATAR_KEY';
const ROLE_KEY = 'ROLE_KEY';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  getId(): any {
    return localStorage.getItem(ID_KEY);
  }

  setId(id: number) {
    localStorage.removeItem(ID_KEY);
    localStorage.setItem(ID_KEY, id.toString())

  }

  getToken(): any {
    return localStorage.getItem(TOKEN_KEY);
  }

  setToken(token: string) {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.setItem(TOKEN_KEY, token);
  }

  getUsername(): any {
    return localStorage.getItem(USERNAME_KEY);
  }

  setUsername(username: string) {
    localStorage.removeItem(USERNAME_KEY);
    localStorage.setItem(USERNAME_KEY, username);
  }

  getName(): any {
    return localStorage.getItem(NAME_KEY);
  }

  setName(name: string) {
    localStorage.removeItem(NAME_KEY);
    localStorage.setItem(NAME_KEY, name);
  }

  getAvatar(): any {
    return localStorage.getItem(AVATAR_KEY);
  }

  setAvatar(avatar: string) {
    localStorage.removeItem(AVATAR_KEY);
    localStorage.setItem(AVATAR_KEY, avatar);
  }

  getRoles(): string[] {
    const roles: string[] = [];
    const roleStr = localStorage.getItem(ROLE_KEY);
    if (roleStr) {
      JSON.parse(roleStr).forEach((role: Authority) => {
        roles.push(role.authority);
      });
    }
    return roles;
  }

  hasRole(roleCheck: string) {
    const roles: string[] = this.getRoles();
    for (let role of roles) {
      if (role === roleCheck) {
        return true;
      }
    }
    return false;
  }

  setRoles(roles: Authority[]) {
    localStorage.removeItem(ROLE_KEY);
    localStorage.setItem(ROLE_KEY, JSON.stringify(roles));
  }

  remove() {
    sessionStorage.removeItem('AUTHENTICATED');
    localStorage.removeItem(ID_KEY);
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(USERNAME_KEY);
    localStorage.removeItem(AVATAR_KEY);
    localStorage.removeItem(NAME_KEY);
    localStorage.removeItem(ROLE_KEY);
  }

  initData(data: JwtResponse) {
    sessionStorage.setItem('AUTHENTICATED', 'OK');
    this.setId(data.id);
    this.setToken(data.token);
    this.setUsername(data.username);
    this.setName(data.name);
    this.setRoles(data.authorities);
    this.setAvatar(data.avatar);
  }
}
