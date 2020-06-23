import { Component, OnInit } from '@angular/core';
import {SwiperOptions} from 'swiper';

@Component({
  selector: 'app-allplaces',
  templateUrl: './allplaces.component.html',
  styleUrls: ['./allplaces.component.scss']
})
export class AllplacesComponent implements OnInit {

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
