import { AfterViewInit, Component, OnInit } from '@angular/core';

declare var $: any;
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, AfterViewInit {

  constructor() { }
  ngAfterViewInit(): void {
    
    // Get the button:
    var mybutton = document.getElementById("back-to-top");

    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton!.style.display = "block";
      } else {
        mybutton!.style.display = "none";
      }
    };
  }

  ngOnInit(): void {
  }

  topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

}
