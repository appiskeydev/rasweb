import { FuseUtils } from "@fuse/utils";
import { Project } from "../projects/project.model";
import { Resource } from "./resource.model";
// https://huongdanjava.com/many-many-relationship-extra-columns-jpa.html
export class Resourceproject {

    id: string;
    name :string ;
    resourceContractType : number  ;    //isIntern, isPartTime , isFullTime
    resourcePartTime : boolean;
    project: Project;
    resource:Resource;
    handle: string;
    updatedAt: string;
    createdAt: string;

    resourceProjectHour: string;
    resourceProjectAllocation : string;
    resourceProjectWorkStartDate: string;
    resourceProjectWorkEndDate: string;

   
    /**
     * Constructor
     *
     * @param Resourceproject
     */
    constructor(resourceproject?)
    {
      
        resourceproject = resourceproject || {};
        if (resourceproject.name !== ''){
            this.handle = FuseUtils.handleize(resourceproject.name  + '');
        }
        this.id = resourceproject.id || '';
        this.name = resourceproject.name || '';
       
        this.updatedAt = resourceproject.updatedAt || '';
        this.createdAt = resourceproject.createdAt || '';
        this.project = resourceproject.project || '';
        this.resource = resourceproject.resource || '';

        this.resourceProjectHour = resourceproject.resourceProjectHour || '';
        this.resourceProjectAllocation = resourceproject.resourceProjectAllocation || '';
        this.resourceProjectWorkStartDate = resourceproject.resourceProjectWorkStartDate || '';
        this.resourceProjectWorkEndDate = resourceproject.resourceProjectWorkEndDate || '';

    }

}
