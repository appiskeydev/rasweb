import { FuseUtils } from "@fuse/utils";

export class Feature {

    id: string;
    name: string;
    handle: string;
    featureEstimateDuration:number;
    updatedAt: string;
    createdAt: string;

   
    /**
     * Constructor
     *
     * @param Feature
     */
    constructor(feature?)
    {
      
        feature = feature || {};
        if (feature.name !== ''){
            this.handle = FuseUtils.handleize(feature.name  + '');
        }
        this.id = feature.id || '';
        this.name = feature.name || '';
        this.updatedAt = feature.updatedAt || '';
        this.createdAt = feature.createdAt || '';
    }
}
