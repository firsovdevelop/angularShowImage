import { Component, OnInit } from '@angular/core';

import { Image } from './image';
import { GlobalDataService } from './global-data.service';
import { MessageService } from './message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public pages = [ 1 ];

  constructor(private globalData: GlobalDataService) { }

  public loadMore() {
    this.pages.push(this.pages.length + 1);
  }

  ngOnInit() {
    this.globalData.currentImage = undefined;
    this.globalData.isEnd = false;
    this.globalData.isLoad = false;
    this.globalData.showPopup = false;
  }
}
