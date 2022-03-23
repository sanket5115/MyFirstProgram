import { LightningElement } from 'lwc';

import {ShowToastEvent} from 'lightning/platformShowToastEvent';

export default class ToastMessage extends LightningElement {
    showErrorToast(){
        const evt = new ShowToastEvent({
            title: 'Toast Error',
            message: 'Some Unexpected error',
            variant : 'error',
            mode:'dismissable'
        });
        this.dispatchEvent(evt);
    }
    showSuccessToast(){
        const evt = new ShowToastEvent({
            title: 'Toast Success',
            message: 'Operation succesful',
            variant : 'success',
            mode:'dismissable'
        });
        this.dispatchEvent(evt);
    }
    showWarningToast(){
        const evt = new ShowToastEvent({
            title: 'Toast Warning',
            message: 'Some issues occured',
            variant : 'warning',
            mode:'pester',
            duration : '5000'
        });
        this.dispatchEvent(evt);
    }
    showInfoToast(){
        const evt = new ShowToastEvent({
            title: 'Toast Info',
            message: 'Opration is running in background',
            variant : 'info',
            mode:'sticky'
        });
        this.dispatchEvent(evt);
    }
}