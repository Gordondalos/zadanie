import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SimpleService } from "./simple.service";
import { AnotherComponent } from './another/another.component';
import { DynamicModule } from "./dinamic/dinamic.module";
import { COMPILER_PROVIDERS } from '@angular/compiler';


@NgModule({
  declarations: [
    AppComponent,
    AnotherComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DynamicModule.forRoot() // singletons
  ],
  providers: [SimpleService, COMPILER_PROVIDERS],
  bootstrap: [AppComponent]
})
export class AppModule { }
