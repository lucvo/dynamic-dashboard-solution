import { Injectable } from '@angular/core';
import { Query, coerceArray } from '@datorama/akita';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs';
import { UserLookupStore } from '../stores/user-lookup.store';
import { UserLookupService } from '../lookup-store.service';
import { AppUser, UserProfile } from '../../models';

@Injectable({
  providedIn: 'root'
})
export class UserLookupQuery extends Query<AppUser> {
  constructor(protected store: UserLookupStore,
              private lookupService: UserLookupService) {
    super(store);
  }

  getUserRoles() {
    return this.select(p => p.roles);
  }

  getUserInformation() {
    return this.select(p => p.userInformation);
  }

  getPermissions() {
    if (this.getValue().permissions && this.getValue().permissions.length) {
      return this.getValue().permissions;
    } else {
      return this.lookupService.getPermissions();
    }
  }

  checkUserPermissions(permissions: string | string[]) {
    const userPermissions = coerceArray(permissions);

    if (userPermissions.length &&
      this.getValue().userInformation &&
      this.getValue().permissions &&
      this.getValue().permissions.length &&
      this.getValue().permissions.some(r => userPermissions.includes(r))
    ) {
      return true;
    } else {
      return false;
    }
  }

  hasPermission(permissions: string | string[], isCheckAllPermissions: boolean = false): Observable<boolean> {
    const userPermissions = coerceArray(permissions);

    return this.select(state => state.userInformation).pipe(
      switchMap((user: UserProfile) => {
        if (user && permissions) {
          return this.select(state => isCheckAllPermissions ?
            userPermissions.every(current => state.permissions.includes(current))
            : state.permissions.some(r => userPermissions.includes(r)));
        } else {
          return of(false);
        }
      })
    );
  }
}
