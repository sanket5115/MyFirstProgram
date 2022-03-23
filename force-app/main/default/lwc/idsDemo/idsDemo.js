import { api, LightningElement, track } from 'lwc';
import accountName from '@salesforce/schema/Account.Name';
import AnnualRevenue from '@salesforce/schema/Account.AnnualRevenue';

export default class IdsDemo extends LightningElement {
    @api recordId;
    // api  start
    @api objectApiName;

    @track fields = [accountName,AnnualRevenue];

    connectedCallback()
    {
        this.objectApiName=this.objectApiName;
    }

    
}