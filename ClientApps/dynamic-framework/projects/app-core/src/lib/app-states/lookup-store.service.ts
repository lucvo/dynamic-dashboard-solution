import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserPermissions } from '../models';
import { UserLookupStore } from '../app-states/stores/user-lookup.store';

@Injectable({ providedIn: 'root' })
export class UserLookupService {

  constructor(private lookupStore: UserLookupStore,
              private http: HttpClient) { }
  getPermissions() {
    const userPermissions = Object.values(UserPermissions);

    this.lookupStore.update(state => {
      return { ...state, permissions: userPermissions };
    });

    return userPermissions;
  }
}


