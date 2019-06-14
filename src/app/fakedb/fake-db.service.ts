import { InMemoryDbService } from 'angular-in-memory-web-api';
import { ProjectDashboardDb } from './dashboard-project';


export class FakeDbService implements InMemoryDbService
{
    createDb(): any
    {
        return {
            // Dashboards
            'project-dashboard-projects' : ProjectDashboardDb.projects,
            'project-dashboard-widgets'  : ProjectDashboardDb.widgets
       
        };
    }
}
