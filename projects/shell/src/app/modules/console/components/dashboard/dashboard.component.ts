import { Component, OnInit } from '@angular/core';
import { ToastService } from '../../../shared/services/toast.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  closeResult!: string;

  constructor(
  ) { }

  ngOnInit(): void {
  }

}
