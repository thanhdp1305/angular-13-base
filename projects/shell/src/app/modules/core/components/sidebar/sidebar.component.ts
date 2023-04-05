import { Component, OnInit } from '@angular/core';
import { CookieControl } from '../../../shared/utils/cookie-control';
import { Urls } from '../../../shared/configs/urls';
import jwt_decode from 'jwt-decode';
import { Token } from '../../../shared/models/token';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  urls = Urls;

  constructor() { }

  ngOnInit(): void {
  }

  get isLocal(): boolean {
    return location.hostname == `localhost`;
  }
}
