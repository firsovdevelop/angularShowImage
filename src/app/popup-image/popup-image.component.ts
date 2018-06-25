import { Component, OnInit, Input } from '@angular/core';

import { Image } from '../image';
import { GlobalDataService } from '../global-data.service';

@Component({
  selector: 'popup-image',
  templateUrl: './popup-image.component.html',
  styleUrls: ['./popup-image.component.css']
})
export class PopupImageComponent implements OnInit {
  @Input() currentImage: Image;

  constructor(private globalData: GlobalDataService) { }

  closePopup(): void {
    this.globalData.showPopup = false;
  }

  ngOnInit() {
  }

}
