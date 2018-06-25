import { Injectable } from '@angular/core';

import { Image } from './image';

@Injectable({
  providedIn: 'root'
})
export class GlobalDataService {
  public isEnd: boolean;
  public isLoad: boolean;
  public currentImage: Image;
  public showPopup: boolean;

  constructor() { }

}
