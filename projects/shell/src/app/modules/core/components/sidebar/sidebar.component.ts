import { Component, OnInit } from "@angular/core";
import { Urls } from "../../../shared/enums/urls";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"],
})
export class SidebarComponent implements OnInit {
  urls = Urls;

  constructor() {
    //
  }

  ngOnInit(): void {
    //
  }

  get isLocal(): boolean {
    return location.hostname == `localhost`;
  }
}
