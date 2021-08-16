import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingGuard } from './guards/shop.guard';

import { HomeComponent } from './home/home.component';
import { RentComponent } from './rent/rent.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { SuccessComponent } from './success/success.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'shopping', component: ShoppingComponent },
    { path: 'rent', component: RentComponent },
    { path: 'shopping-cart', component: ShoppingCartComponent },
    { path: 'success', component: SuccessComponent, canActivate: [ShoppingGuard] },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule],
})
export class AppRoutingModule {}
