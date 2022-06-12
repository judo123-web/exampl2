import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import SwiperCore, { Navigation, SwiperOptions } from "swiper";
SwiperCore.use([Navigation]);


@Component({
  selector: 'app-swiper',
  templateUrl: './swiper.component.html',
  styleUrls: ['./swiper.component.scss'],
  encapsulation: ViewEncapsulation.None,

})
export class SwiperComponent implements OnInit {

  public config: SwiperOptions = {
    createElements : true,
    centeredSlidesBounds : true,
    slidesPerView : "auto",
    spaceBetween: 2,
    navigation: true,

    
    // breakpoints: {
    //   // when window width is >= 320px
    //   330: {
    //     slidesPerView: 1.5,
    //   },
    //   // when window width is >= 480px
    //   480: {
    //     slidesPerView: 2,
    //   },
    //   // when window width is >= 640px
    //   640: {
    //     slidesPerView: 3,
    //   }
    // }


  }
  cards !: Array<string>

  constructor() { }

  ngOnInit(): void {
    this.cards = ['red', 'yellow', 'brown', 'green', 'aqua', 'beige', 'aqua', 'aqua', 'aqua']
  }

  outer() {
    console.log("outer clikced")
  }

}
