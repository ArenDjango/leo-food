import { Component, OnInit } from '@angular/core';
import {SwiperOptions} from 'swiper';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.scss']
})
export class SingleComponent implements OnInit {

  config: SwiperOptions = {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    loop: false,
    loopedSlides: 8,
    centeredSlides: true,
    slidesPerView: 1,
    // spaceBetween: 30,
  };


  config4: SwiperOptions = {
    loop: false,
    loopedSlides: 8,
    centeredSlides: false,
    slidesPerView: 'auto',
    spaceBetween: 40,
  };

  config5: SwiperOptions = {
    loop: false,
    loopedSlides: 8,
    centeredSlides: false,
    slidesPerView: 'auto',
    spaceBetween: 30,
  };



  constructor() { }

  ngOnInit(): void {
  }


}
