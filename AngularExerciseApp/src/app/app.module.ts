import { LikeDislikeComponent } from './components/like-dislike/like-dislike.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentResultComponent } from './components/student-result/student-result.component';
import { PipeDemoComponent } from './components/pipe-demo/pipe-demo.component';
import { WrapPipe } from './pipes/wrap.pipe';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { FormsModule } from '@angular/forms';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    StudentResultComponent,
    LikeDislikeComponent,
    PipeDemoComponent,
    WrapPipe,
    ProductDetailComponent,
    ParentComponent,
    ChildComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
