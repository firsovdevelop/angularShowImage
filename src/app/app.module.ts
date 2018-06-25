import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PageComponent } from './page/page.component';
import { PopupImageComponent } from './popup-image/popup-image.component';

@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    PopupImageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
