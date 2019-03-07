import { FuseUtils } from "@fuse/utils";

export class Company {

    id:string;
    handle:string;
    name:string;

      /**
     * Constructor
     *
     * @param Company
     */
    constructor(company?)
    {
      
        company = company || {};
        if (company.companyName !== ''){
            this.handle = FuseUtils.handleize(company.name  + '');
        }
        this.id = company.id || '';
        this.name = company.name || '';
}
}