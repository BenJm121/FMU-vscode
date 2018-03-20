import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// 页面
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { FootComponent } from './foot/foot.component';
// primeng配置

import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ButtonModule, InputTextModule} from 'primeng/primeng';
@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    FootComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    InputTextModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
