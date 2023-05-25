import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './01_header/header.component';
import { MainBodyComponent } from './02_mainBody/mainBody.component';
import { FooterComponent } from './03_footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainBodyComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
