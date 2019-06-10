import { FuseUtils } from "@fuse/utils";

export class Opratingcost {


    id: string;
    monthlyCost:number ;
    handle: string;
    updatedAt: string;
    createdAt: string;

   
    /**
     * Constructor
     *
     * @param Opratingcost
     */
    constructor(opratingcost?)
    {
      
        opratingcost = opratingcost || {};
        if (opratingcost.monthlyCost !== ''){
            this.handle = FuseUtils.handleize(opratingcost.monthlyCost  + '');
        }
        this.id = opratingcost.id || '';
        this.monthlyCost = opratingcost.monthlyCost || '';
        this.updatedAt = opratingcost.updatedAt || '';
        this.createdAt = opratingcost.createdAt || '';
    }
}
