import { Injectable } from '@angular/core';
import { StoreConfig, Store } from '@datorama/akita';
import { AppUser } from '../../models';

export function createInitialLookupState(): AppUser {
  return {
    roles: []
  } as AppUser;
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'lookup' })
export class UserLookupStore extends Store<AppUser> {
  constructor() {
    super(createInitialLookupState());
  }
}
