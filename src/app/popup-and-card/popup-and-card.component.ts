import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-popup-and-card',
  templateUrl: './popup-and-card.component.html',
  styleUrls: ['./popup-and-card.component.scss']
})
export class PopupAndCardComponent implements OnInit {

  constructor() { }

  @Input() background!: string
  ngOnInit(): void {
  }

  learnMore(str: string) {
    console.log(str + ' Clicked')
  }


}
