import { IMappedModules } from 'dynamic-core/lib/dynamic-layout';

export const DashboardContainerMapper: IMappedModules = {
    reports: {
        load: () => import('./report/report.module').then(r => r.ReportModule)
    },
    workspace: {
        load: () => import('./workspace/workspace.module').then(w => w.WorkspaceModule)
    }
};
