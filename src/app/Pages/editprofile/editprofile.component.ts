import { Component, OnInit } from '@angular/core';
import {SwiperOptions} from 'swiper';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.scss']
})
export class EditprofileComponent implements OnInit {

  config: SwiperOptions = {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    loop: false,
    loopedSlides: 8,
    centeredSlides: true,
    slidesPerView: 3,
    spaceBetween: 30,
  };

  constructor() { }

  ngOnInit(): void {
  }

}
