import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {ItemComponent} from './item/item.component';
import {HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from './app-routing.module';
import {ItemUpdateComponent} from './item-update/item-update.component';
import {ReactiveFormsModule, FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    ItemUpdateComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
