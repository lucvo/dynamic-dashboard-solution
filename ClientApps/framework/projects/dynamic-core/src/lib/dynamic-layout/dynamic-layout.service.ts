import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

import { LayoutContent, PageSetting } from '../models';
import { BaseSettingsService } from '../services/base-settings.service';
import { ActivatedRoute } from '@angular/router';
import { map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {

  historyState: Array<LayoutContent> = [];
  private subject = new BehaviorSubject<LayoutContent[]>(this.historyState);

  constructor(private settingsService: BaseSettingsService) {

  }

  setState = (tracks: Array<LayoutContent>) => {
    this.subject.next(tracks);
  }

  addItem = (item: PageSetting) => {
    const state = this.subject.getValue();

    if (state[0].items.indexOf(item) !== -1 || state[1].items.indexOf(item) !== -1) {
      console.warn('Item with the same id exists on the dashboard.');
      return;
    }

    state[0].items.length <= state[1].items.length ? state[0].items.push(item) : state[1].items.push(item);

    this.subject.next(state);
  }

  removeItem = (item: PageSetting) => {
    const state = this.subject.getValue();
    state.forEach(track => {
      track.items.forEach((i, index) => {
        if (i === item) {
          track.items.splice(index, 1);
        }
      });
    });

    this.subject.next(state);
  }

  loadContents = (id: any): Observable<Array<any>> => {
    return this.settingsService.loadSettings(id).pipe(
      map((state: Array<LayoutContent>) => {
        this.historyState = state;
        this.subject.next(this.historyState);
        return state;
      })
    );
  }
}
