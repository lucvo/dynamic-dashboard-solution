import { FormGroup } from '@angular/forms';

export interface LayoutContent {
  items: Array<PageSetting>;
}

export interface PageSetting {
  name: string;
  cName: string;
  title: string;
  id: string;
  extra: any;
}