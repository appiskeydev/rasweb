import { FuseUtils } from "@fuse/utils";
import { Project } from "../projects/project.model";

export class Milestone {

    id: string;
    name: string;
    milestoneStartDate:Date;
    milestoneDelieveryDate:Date;
    milestoneDevelopmentDate:Date;
    milestoneExpectedPayment:number;
    milestonePaymentAmount:number;
    milestoneCost:number;
    milestonePaymentMethod:string;
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
        this.milestoneDevelopmentDate = milestone.milestoneDevelopmentDate || '';
        this.milestoneExpectedPayment = milestone.milestoneExpectedPayment || '';
        this.milestonePaymentAmount = milestone.milestonePaymentAmount || '';
        this.milestoneCost = milestone.milestoneCost || '';
        this.milestonePaymentMethod = milestone.milestonePaymentMethod || '';
        this.project = milestone.project || null;
    }
}
