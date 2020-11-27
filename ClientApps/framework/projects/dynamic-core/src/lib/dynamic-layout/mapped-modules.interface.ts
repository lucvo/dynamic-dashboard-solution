import { NgModuleFactory, Type, InjectionToken } from '@angular/core';

export interface IMappedModules {
    [key: string]: { load: () => Promise<NgModuleFactory<any> | Type<any>>; };
}

export type DynamicModuleType = Type<any> & {
    entryComponents: {};
};

export const DYNAMIC_MODULES_MAP = new InjectionToken('DYNAMIC_MODULES_MAP');
