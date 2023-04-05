import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Urls } from '../../../shared/configs/urls';

declare var $: any;

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  constructor(
    private router: Router,) {}

  ngOnInit(): void {
  }

  signIn(): void {
    this.router.navigate([Urls.dashboard]);
  }
}
