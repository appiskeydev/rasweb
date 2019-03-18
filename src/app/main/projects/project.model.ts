import { FuseUtils } from "@fuse/utils";
import { CdkCellOutletMultiRowContext } from "@angular/cdk/table";
import { Client } from "../clients/client.model";
import { Feature } from "../features/feature.model";
import { Resource } from "../resources/resource.model";
import { Milestone } from "../milestones/milestone.model";
import { Input } from "@angular/core";

export class Project {


    id: string;
    name: string ;
    projectClient:Client;
    projectFeatures:Feature[];
    projectResources:Resource[];
    projectMilestones:Milestone[];
    projectStartDate:Date;
    projectDevelopmentDate:Date;
    projectCost:number;
    projectTimeline:string;
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
        this.projectResources = project.projectResources || [];
        this.projectMilestones = project.projectMilestones || [];
        this.projectStartDate = project.projectStartDate || '';
        this.projectDevelopmentDate = project.projectDevelopmentDate || '';
        this.projectCost = project.projectCost || '';
        this.projectTimeline = project.projectTimeline || '';
        this.projectPaymentMethod = project.projectPaymentMethod || '';
    }
}
