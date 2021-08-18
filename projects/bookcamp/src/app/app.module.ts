import { NgModule, LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import ptBr from '@angular/common/locales/pt';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { RentComponent } from './rent/rent.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { SuccessComponent } from './success/success.component';
import { FilterComponent } from './filter/filter.component';

registerLocaleData(ptBr);

@NgModule({
    declarations: [AppComponent, ShoppingComponent, RentComponent, HomeComponent, ShoppingCartComponent, SuccessComponent, FilterComponent],
    imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, FormsModule],
    providers: [{ provide: LOCALE_ID, useValue: 'pt-BR' }],
    bootstrap: [AppComponent],
})
export class AppModule { }
