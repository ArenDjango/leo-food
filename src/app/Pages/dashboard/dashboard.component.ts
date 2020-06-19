import { Component, OnInit } from '@angular/core';
import {SwiperOptions} from 'swiper';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

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

  config2: SwiperOptions = {
    loop: false,
    loopedSlides: 8,
    centeredSlides: false,
    slidesPerView: 3,
    spaceBetween: 30,
  };
  config3: SwiperOptions = {
    loop: false,
    loopedSlides: 8,
    centeredSlides: false,
    slidesPerView: 'auto',
    spaceBetween: 10,
  };

  config4: SwiperOptions = {
    loop: false,
    loopedSlides: 8,
    centeredSlides: false,
    slidesPerView: 'auto',
    spaceBetween: 40,
  };



  constructor() { }

  ngOnInit(): void {
  }

}
