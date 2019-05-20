import { FuseUtils } from "@fuse/utils";
import { Project } from "../projects/project.model";

export class Milestone {

    id: string;
    name: string;
    milestoneStartDate:Date;
    milestoneDelieveryDate:Date;
    milestoneExpectedPayment:number;
    milestoneCost:number;
    milestoneNoOfDays:number;
    milestoneTotalPercent:number;
    milestonePercentComplete:number;
    flag : boolean;
    project:Project;
    handle: string;
    updatedAt: string;
    createdAt: string;

   
    /**
     * Constructor
     *
     * @param Milestone
     */
    constructor(milestone?)
    {
      
        milestone = milestone || {};
        if (milestone.name !== ''){
            this.handle = FuseUtils.handleize(milestone.name  + '');
        }
        this.id = milestone.id || '';
        this.name = milestone.name || '';
        this.updatedAt = milestone.updatedAt || '';
        this.createdAt = milestone.createdAt || '';
        this.milestoneStartDate = milestone.milestoneStartDate || '';
        this.milestoneDelieveryDate = milestone.milestoneDelieveryDate || '';
        this.milestoneExpectedPayment = milestone.milestoneExpectedPayment || '';
        this.milestoneCost = milestone.milestoneCost || '';
        this.milestoneNoOfDays = milestone.milestoneNoOfDays || '';
        this.milestoneTotalPercent = milestone.milestoneTotalPercent || '';
        this.milestonePercentComplete = milestone.milestonePercentComplete || '';
        this.flag = milestone.flag || '';

        this.project = milestone.project || null;
    }
}
