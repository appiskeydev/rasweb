import { FuseUtils } from "@fuse/utils";
import { Company } from "../companies/company.model";

export class Client {
    id: string;
    name: string;
    handle: string;
    clientPhoneNumber: number;
    clientEmail : string;
    clientSocial:string;
    clientLocation:string;
    clientWebUrl:string;
    // clientCompany:string;
    parent:Client;
    clientAddress:string;
    clientImageUrl:string;
    clientTimeZone:string;
    clientAvailability:string;
    clientCompanyName:Company;
    isActive:boolean;
    updatedAt: string;
    createdAt: string;

   
    /**
     * Constructor
     *
     * @param Client
     */
    constructor(client?)
    {
      
        client = client || {};
        if (client.clientName !== ''){
            this.handle = FuseUtils.handleize(client.name  + '');
        }
        this.id = client.id || '';
        this.name = client.name || '';
        this.clientPhoneNumber = client.clientPhoneNumber || '';
        this.clientEmail = client.clientEmail || '';
        this.clientAddress = client.clientAddress || '';
        this.clientImageUrl = client.clientImageUrl || '';
        this.clientLocation = client.clientLocation || '';
        this.clientSocial = client.clientSocial || '';
        this.clientTimeZone = client.clientTimeZone || '';
        this.clientWebUrl = client.clientWebUrl || '';
        // this.clientCompany = client.clientCompany || '';
        this.parent = client.parent || null;

        this.clientAvailability = client.clientAvailability || '';
        this.clientCompanyName = client.clientCompanyName || null;
        this.isActive = client.isActive || '';

        this.updatedAt = client.updatedAt || '';
        this.createdAt = client.createdAt || '';
    }
}
