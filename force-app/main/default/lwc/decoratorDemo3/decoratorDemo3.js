import { api, LightningElement, track } from 'lwc';

export default class DecoratorDemo3 extends LightningElement {
    @api location;
    @track
        user={
            firstName:"Sanket DEmo",
            lastName:"shejwal"
        };
    @api
        updateUser()
        {
            this.user={
                firstName:"swaransh demo"
            }
            // ,lastName:"shejwal"
            //this.user.firstName="aniket Demmoo";
        }
}