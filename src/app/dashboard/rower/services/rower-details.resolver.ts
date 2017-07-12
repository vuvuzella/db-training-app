import { Injectable } from '@angular/core';
import { Router,
    Resolve,
    RouterStateSnapshot,
    ActivatedRouteSnapshot,
    ActivatedRoute } from '@angular/router';
import { Rower, RowersService } from './rowers.service';

@Injectable()
export class RowerDetailsResolver implements Resolve<Rower>{
    constructor(
        private rowersService: RowersService,
        private router: Router,
        private actRoute: ActivatedRoute
    ) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<Rower> {
        const id = +route.paramMap.get('id');
        return this.rowersService.getRower(id)
            .then(response => {
                console.log(response);
                return response;
            });
    }
}
