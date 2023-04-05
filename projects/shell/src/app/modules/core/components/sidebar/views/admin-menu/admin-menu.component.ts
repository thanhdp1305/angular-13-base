import { Component, OnInit } from '@angular/core';
import { Urls } from 'projects/shell/src/app/modules/shared/configs/urls';

@Component({
  selector: 'app-admin-menu',
  templateUrl: './admin-menu.component.html',
  styleUrls: ['./admin-menu.component.scss']
})
export class AdminMenuComponent implements OnInit {

  urls = Urls;

  constructor() { }

  ngOnInit(): void {
  }

}
