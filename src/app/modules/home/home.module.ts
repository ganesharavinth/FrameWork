import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LeftmenuComponent } from './components/leftmenu/leftmenu.component';
import { AdvComponent } from './components/adv/adv.component';
import { ContentsComponent } from './components/contents/contents.component';
import { BodyComponent } from './components/body/body.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LeftmenuComponent,
    AdvComponent,
    ContentsComponent,
    BodyComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    LeftmenuComponent,
    AdvComponent,
    ContentsComponent,
    BodyComponent
  ]
})
export class HomeModule { }
