import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
    
    constructor(private route: Router) {}

    canActivate() {

        if(!localStorage.getItem('cmail-token')) {
            this.route.navigate(['login'])
            return false;
        }

        return true;
    }
}