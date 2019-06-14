import { FuseUtils } from "@fuse/utils";

export class Designation {

    id:string;
    handle:string;
    name:string;
    updatedAt: string;
    createdAt: string;

   
      /**
     * Constructor
     *
     * @param Designation
     */
    constructor(designation?)
    {
      
        designation = designation || {};
        if (designation.designationName !== ''){
            this.handle = FuseUtils.handleize(designation.name  + '');
        }
        this.id = designation.id || '';
        this.name = designation.name || '';
        this.updatedAt = designation.updatedAt || '';
        this.createdAt = designation.createdAt || '';
}
}
