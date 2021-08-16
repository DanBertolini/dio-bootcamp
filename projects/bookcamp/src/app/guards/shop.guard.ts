import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ShoppingCartService } from '../services/shopping-cart.service';

@Injectable({
    providedIn: 'root',
})
export class ShoppingGuard implements CanActivate {
    constructor(private shoppingCartService: ShoppingCartService) {}

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot,
    ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        return this.shoppingCartService.getQuantityOfItensAsync() > 0;
    }
}
