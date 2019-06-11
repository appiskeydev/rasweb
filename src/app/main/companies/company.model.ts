import { FuseUtils } from "@fuse/utils";

export class Company {

    id:string;
    handle:string;
    name:string;
    updatedAt: string;
    createdAt: string;

   
      /**
     * Constructor
     *
     * @param Company
     */
    constructor(company?)
    {
      
        company = company || {};
        if (company.name !== ''){
            this.handle = FuseUtils.handleize(company.name  + '');
        }
        this.id = company.id || '';
        this.name = company.name || '';
        this.updatedAt = company.updatedAt || '';
        this.createdAt = company.createdAt || '';
}
}