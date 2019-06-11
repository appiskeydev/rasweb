import { FuseUtils } from "@fuse/utils";

export class Payment {


    id: string;
    paymentDate:Date;
    paymentAmount:number;
    handle: string;
    updatedAt: string;
    createdAt: string;
   
    /**
     * Constructor
     *
     * @param Payment
     */
    constructor(payment?)
    {
      
        payment = payment || {};
        if (payment.paymentAmount !== ''){
            this.handle = FuseUtils.handleize(payment.paymentAmount  + '');
        }
        this.id = payment.id || '';
        this.paymentAmount = payment.paymentAmount || '';
        this.paymentDate = payment.paymentDate || '';
        this.updatedAt = payment.updatedAt || '';
        this.createdAt = payment.createdAt || '';
    }
}
