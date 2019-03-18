import { FuseNavigation } from '@fuse/types';

export const navigation: FuseNavigation[] = [
    {
        id       : 'applications',
        title    : 'Applications',
        translate: 'NAV.APPLICATIONS',
        type     : 'group',
        children : [
            {
                id       : 'dashboard',
                title    : 'Dashboard',
                translate: 'NAV.DASHBOARD.TITLE',
                type     : 'item',
                icon     : 'dashboard',
                url      : '/dashboard'               
            },
            {
                'id'       : 'project',
                'title'    : 'Project',
                'translate': 'NAV.PROJECT.TITLE',
                'type'     : 'collapsable',
                'icon'     : 'border_all',
                'children' : [
                    {
                        'id'   : 'skill',
                        'title': 'Skill',
                        'translate': 'NAV.SKILLS.TITLE',
                        'type' : 'item',
                        'url'  : '/skills'
                    },
                    {
                        'id'   : 'client',
                        'title': 'Client',
                        'translate': 'NAV.CLIENT.TITLE',
                        'type' : 'item',
                        'url'  : '/clients'
                    },
                    {
                        'id'   : 'create_project',
                        'title': 'Create Project',
                        'translate': 'NAV.CREATE_PROJECT.TITLE',
                        'type' : 'item',
                        'url'  : '/projects/new',
                        'exactMatch':true
                    },
                    {
                        'id'   : 'project_list',
                        'title': 'Project List',
                        'translate': 'NAV.PROJECT_LIST.TITLE',
                        'type' : 'item',
                        'url'  : '/projects',
                        'exactMatch':true

                    },
                    {
                        'id'   : 'feature',
                        'title': 'Features',
                        'translate': 'NAV.FEATURES.TITLE',
                        'type' : 'item',
                        'url'  : '/features'
                    },
               

                ]
            },
            {
                'id'       : 'resource',
                'title'    : 'Resources',
                'translate': 'NAV.RESOURCES.TITLE',
                'type'     : 'collapsable',
                'icon'     : 'border_all',
                'children' : [
                    {
                        'id'   : 'department',
                        'title': 'Department',
                        'translate': 'NAV.DEPARTMENT.TITLE',
                        'type' : 'item',
                        'url'  : '/departments'
                    },
                    {
                        'id'   : 'create_resource',
                        'title': 'Create Resource',
                        'translate': 'NAV.CREATE_RESOURCE.TITLE',
                        'type' : 'item',
                        'url'  : '/resources/new',
                        'exactMatch':true
                    },
                    {
                        'id'   : 'resource_list',
                        'title': 'Resource List',
                        'translate': 'NAV.RESOURCE_LIST.TITLE',
                        'type' : 'item',
                        'url'  : '/resources',
                        'exactMatch':true

                    }

                ]
            },
            {
                'id'       : 'operating',
                'title'    : 'Expense',
                'translate': 'NAV.OPERATING.TITLE',
                'type'     : 'collapsable',
                'icon'     : 'border_all',
                'children' : [
                    {
                        'id'   : 'operating_cost',
                        'title': 'Operating Cost',
                        'translate': 'NAV.OPERATING_COST.TITLE',
                        'type' : 'item',
                        'url'  : '/opratingcosts'
                    },
                    {
                        'id'   : 'fringe_benefits',
                        'title': 'Fringe Benefits',
                        'translate': 'NAV.FRINGE_BENEFITS.TITLE',
                        'type' : 'item',
                        'url'  : '/fringebenefits'
                    }
                   

                ]
            },
            {
                'id'   : 'reports',
                'title': 'Reports',
                'translate': 'NAV.REPORTS.TITLE',
                'type' : 'item',
                'icon' : 'assessment',
                'url'  : '/report'
            }
        ]
    }
];
