import { NgModuleFactory, Type } from '@angular/core';

export interface IMappedModules {
    [key: string]: { load: () => Promise<NgModuleFactory<any> | Type<any>>; };
}

export type DynamicModuleType = Type<any> & {
    entryComponents: {};
};
