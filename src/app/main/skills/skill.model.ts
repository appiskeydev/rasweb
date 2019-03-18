import { FuseUtils } from "@fuse/utils";
import { Resource } from "../resources/resource.model";

export class Skill {
   
   
    id: string;
    name: string ;
    handle: string;
    skillResources:Resource[];
    updatedAt: string;
    createdAt: string;

   
    /**
     * Constructor
     *
     * @param Skill
     */
    constructor(skill?)
    {
      
        skill = skill || {};
        if (skill.name !== ''){
            this.handle = FuseUtils.handleize(skill.name  + '');
        }
        this.id = skill.id || '';
        this.name = skill.name || '';
        this.skillResources = skill.skillResources || null;
        this.updatedAt = skill.updatedAt || '';
        this.createdAt = skill.createdAt || '';
    }

}
