import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './01_header/header.component';
import { TabMenuComponent } from './02_TabMenu/TabMenu.component';
import { MainBodyComponent } from './03_mainBody/mainBody.component';
import { FooterComponent } from './04_footer/footer.component';
import { PopoverModule } from 'ngx-bootstrap/popover';

import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { createPopper } from '@popperjs/core';
// import { Tooltip } from 'bootstrap';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TabMenuComponent,
    MainBodyComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    PopoverModule.forRoot(),
    TooltipModule.forRoot(),
    // TooltipModule,
    BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
