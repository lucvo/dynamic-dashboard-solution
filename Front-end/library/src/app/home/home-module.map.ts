import { IMappedModules } from '@dashboard-core/dynamic-layout/mapped-modules.interface';

export const dynamicMap: IMappedModules = {
    hello: {
      load: () => import('../container-components/hello-world/hello-word.module').then(m => m.HelloWordModule)
    },
    authorization: {
      load: () => import('../container-components/my-authorization/my-authorization.module').then(m => m.MyAuthorizationModule)
    }
  };
