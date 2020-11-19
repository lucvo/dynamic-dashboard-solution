import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, map } from 'rxjs/operators';
import { ApiResponse } from '@cores/lib/responses';
import { BaseApiService } from './service-base.service';
import { UserProfile, AppSettings } from '../models';
import { UserLookupStore } from '../app-states/stores/user-lookup.store';

@Injectable({ providedIn: 'root' })
export class UserService extends BaseApiService {
  userServiceApiUrl = 'users';

  constructor(private http: HttpClient,
              private lookupStore: UserLookupStore,
  ) {
    super(http);
    this.rootUrl = AppSettings.rootApiUrl;
  }

  getProfile() {
    return this.get<UserProfile>('profile').pipe(
      map((response: ApiResponse<UserProfile>) => response.data),
      tap((result: UserProfile) => {
        this.lookupStore.update(state => {
          return { ...state, userInformation: result };
        });
      }));
  }
}
