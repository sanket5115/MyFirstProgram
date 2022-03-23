import { LightningElement, track, wire } from 'lwc';

import getAccountList from '@salesforce/apex/AccountHelper.getAccountList';
export default class AccountList extends LightningElement {

        @track accounts;
        // @wire (getAccountList) accounts;

        @track error;
        handleLoad(){
            getAccountList()
            .then(result=>{
                this.accounts=result;
            })
            .catch(error=>{
                this.error=error;
            });
        }
        // @wire (getAccountList)
        // wiredAccounts({error,data})
        // {
        //     if(data){
        //         this.accounts=data;

        //     }else if(error){
        //         this.error=error;
        //     }
        // }
}