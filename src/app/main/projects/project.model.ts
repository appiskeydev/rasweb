import { FuseUtils } from "@fuse/utils";
import { Client } from "../clients/client.model";
import { Feature } from "../features/feature.model";
import { Milestone } from "../milestones/milestone.model";
import { Resource } from "../resources/resource.model";
import { ResourceProject } from "../resources/resource-project.model";

export class Project {


    id: string;
    name: string ;
    projectClient:Client;
    projectFeatures:Feature[];
    resourceProjects:Resource[];
    // projectResourcesList : ResourceProject[];
    projectMilestones:Milestone[];
    projectStartDate:Date;
    projectDevelopmentDate:Date;
    projectCost:number;
    projectTimeline:number;
    projectPaymentMethod:string;
    handle: string;
    updatedAt: string;
    createdAt: string;

   
    /**
     * Constructor
     *
     * @param Project
     */
    constructor(project?)
    {
      
        project = project || {};
        if (project.name !== ''){
            this.handle = FuseUtils.handleize(project.name  + '');
        }
        this.id = project.id || '';
        this.name = project.name || '';
        this.projectClient =project.projectClient || null;
        this.updatedAt = project.updatedAt || '';
        this.createdAt = project.createdAt || '';
        this.projectFeatures = project.projectFeatures || [];
        this.resourceProjects = project.resourceProjects || [];
        // this.projectResourcesList = project.projectResourcesList || [];
        this.projectMilestones = project.projectMilestones || [];
        this.projectStartDate = project.projectStartDate || '';
        this.projectDevelopmentDate = project.projectDevelopmentDate || '';
        this.projectCost = project.projectCost || '';
        this.projectTimeline = project.projectTimeline || '';
        this.projectPaymentMethod = project.projectPaymentMethod || '';
    }
}
