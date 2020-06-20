import { Component, OnInit } from '@angular/core';
import {SwiperOptions} from 'swiper';

@Component({
  selector: 'app-singlemenu',
  templateUrl: './singlemenu.component.html',
  styleUrls: ['./singlemenu.component.scss']
})
export class SinglemenuComponent implements OnInit {

  config3: SwiperOptions = {
    loop: false,
    loopedSlides: 8,
    centeredSlides: false,
    slidesPerView: 'auto',
    spaceBetween: 10,
  };

  constructor() { }

  ngOnInit(): void {
  }

}
