import { Type, InjectionToken } from '@angular/core';

export interface DynamicComponent {
  data: any;
}

export interface DynamicComponentDictionary {
  [feature: string]: {
    [version: number]: Type<DynamicComponent>;
  };
}
export const DYNAMIC_COMPONENT_DICTIONARY = new InjectionToken('DYNAMIC_COMPONENT_DICTIONARY');
