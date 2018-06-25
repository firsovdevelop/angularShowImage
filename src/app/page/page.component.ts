import { Component, OnInit, Input } from '@angular/core';

import { Image } from '../image';

import { ImageService } from '../image.service';
import { GlobalDataService } from '../global-data.service';

@Component({
  selector: 'page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {
  @Input() pageNumber: number;
  @Input() isEnd: boolean;
  @Input() isLoad: boolean;
  @Input() currentImage: Image;
  @Input() showPopup: boolean;
  images: Image[];
  perPage: number;


  constructor(
              private imageService: ImageService,
              private globalData: GlobalDataService
              ) { }

  loadPage(perPage: number, page: number): void {
    this.imageService.getImagesPerPage(perPage, page)
        .subscribe(images => {
          this.images = images;
          this.globalData.isEnd = images.length != (this.perPage + 1) ? true : false;
          this.globalData.isLoad = false; // Данные загружены
        });
  }

  showImage(currentImage: Image) {
    this.globalData.currentImage = currentImage;
    this.globalData.showPopup = true;
  }

  ngOnInit() {
    this.perPage = 9; // Размер страницы
    this.globalData.isLoad = true;
    this.globalData.showPopup = false;
    this.loadPage(this.perPage + 1, this.pageNumber);
  }

}
