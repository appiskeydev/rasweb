import { FuseUtils } from "@fuse/utils";

export class Fringebenefit {
    id: string;
    benefitMonth : string;
    name: string;
    expenseAmount:number;
    isOneTime : boolean;
    handle: string;
    updatedAt: string;
    createdAt: string;

   
    /**
     * Constructor
     *
     * @param Fringebenefit
     */
    constructor(fringebenefit?)
    {
      
        fringebenefit = fringebenefit || {};
        if (fringebenefit.name !== ''){
            this.handle = FuseUtils.handleize(fringebenefit.name  + '');
        }
        this.id = fringebenefit.id || '';
        this.benefitMonth = fringebenefit.benefitMonth || '';
        this.name = fringebenefit.name || '';
        this.expenseAmount = fringebenefit.expenseAmount || '';
        this.isOneTime = fringebenefit.isOneTime || '';
        this.updatedAt = fringebenefit.updatedAt || '';
        this.createdAt = fringebenefit.createdAt || '';
    }
}
