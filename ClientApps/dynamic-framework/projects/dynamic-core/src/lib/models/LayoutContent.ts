export interface LayoutContent {
  items: Array<PageSetting>;
}

export interface PageSetting {
  name: string;
  cName: string;
  title: string;
  formGroup: string;
  id: string;
}