import { FuseUtils } from "@fuse/utils";
import { Resource } from "../resources/resource.model";

export class Department {
    id: string;
    name: string;
    handle: string;
    departmentHod:Resource;
    departmentBench:number;
    updatedAt: string;
    createdAt: string;
  
   
    /**
     * Constructor
     *
     * @param Department
     */
    constructor(department?)
    {
      
        department = department || {};
        if (department.name !== ''){
            this.handle = FuseUtils.handleize(department.name  + '');
        }
        this.id = department.id || '';
        this.name = department.name || '';
        this.departmentHod= department.departmentHod || null;
        this.departmentBench= department.departmentBench || 0;
        this.updatedAt = department.updatedAt || '';
        this.createdAt = department.createdAt || '';
    
    }
}
