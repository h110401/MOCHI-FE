import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {TokenService} from "../../service/token/token.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  unread: any;

  constructor(private router: Router,
              private tokenService: TokenService) {
  }

  ngOnInit(): void {
  }

  logout() {
    this.tokenService.remove();
    this.router.navigate(['/login']);
  }
}
