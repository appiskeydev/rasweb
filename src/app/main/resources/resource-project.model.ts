
import { Resource } from "./resource.model";
import { FuseUtils } from "@fuse/utils";
import { Projectid } from "../projects/projectid.model";


export class ResourceProject {

    id:string;
    name: string;
    handle:string;
    updatedAt: string;
    createdAt: string;
    resourceProj: Projectid;
    projectRes:Resource;
    resourceProjectHour: string;
    resourceProjectAllocation: string;
    resourceProjectWorkStartDate: string;
    resourceProjectWorkEndDate: string;

    /**
        * Constructor
        *
        * @param Resource
        * @param Project
        */
    constructor(resource?, project? ) {

        resource = resource || {};
        project = project || {};
        if ((resource.name || project.name) !== '') {
            this.handle = FuseUtils.handleize(resource.name + '');
            this.handle = FuseUtils.handleize(project.name + '');
        }
        this.id =  '';
        this.name =  '';
        this.updatedAt =   '';
        this.createdAt =  '';
        this.resourceProj = new Projectid(project)|| null;
        this.projectRes = resource.projectRes || null;
        this.resourceProjectHour = resource.resourceProjectHour || '';
        this.resourceProjectAllocation = resource.resourceProjectAllocation || '';
        this.resourceProjectWorkStartDate = resource.resourceProjectWorkStartDate || '';
        this.resourceProjectWorkEndDate = resource.resourceProjectWorkEndDate || '';
    }

}


