import { Project } from "../projects/project.model";
import { Resource } from "./resource.model";
import { FuseUtils } from "@fuse/utils";


export class ResourceProject {

    id:string;
    name: string;
    handle:string;
    updatedAt: string;
    createdAt: string;
    project: Project;
    resource:Resource;
    resourceProjectHour: string;
    resourceProjectAllocation: string;
    resourceProjectWorkStartDate: string;
    resourceProjectWorkEndDate: string;

    /**
        * Constructor
        *
        * @param Resource
        */
    constructor(resourceProject?) {

        resourceProject = resourceProject || {};
        if (resourceProject.name !== '') {
            this.handle = FuseUtils.handleize(resourceProject.name + '');
        }
        this.id = resourceProject.id || '';
        this.name = resourceProject.name || '';
        this.updatedAt = resourceProject.updatedAt || '';
        this.createdAt = resourceProject.createdAt || '';
        this.project = resourceProject.project || null;
        this.resource = resourceProject.resource || null;
        this.resourceProjectHour = resourceProject.resourceProjectHour || '';
        this.resourceProjectAllocation = resourceProject.resourceProjectAllocation || '';
        this.resourceProjectWorkStartDate = resourceProject.resourceProjectWorkStartDate || '';
        this.resourceProjectWorkEndDate = resourceProject.resourceProjectWorkEndDate || '';
    }
}


