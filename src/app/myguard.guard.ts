import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { LinkAComponent } from './link-a/LinkAComponent';

@Injectable({
  providedIn: 'root'
})
export class MyguardGuard implements CanDeactivate<LinkAComponent> {
  canDeactivate(
    component: LinkAComponent,
     currentRoute: ActivatedRouteSnapshot, 
     currentState: RouterStateSnapshot, 
     nextState?: RouterStateSnapshot
): Observable<boolean> | Promise<boolean> | boolean {

    return component.canDeactivate();
  }
}
