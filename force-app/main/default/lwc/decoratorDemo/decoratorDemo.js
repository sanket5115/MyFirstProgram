import { api, LightningElement, track } from 'lwc';

export default class DecoratorDemo extends LightningElement {
@api    location;
@track
    user={
        firstName:"Sanket",
        lastName:"shejwal"
    };

    updateUser()
    {
        // this.user={
        //     firstName:"swaransh",
        //     lastName:"shejwal"
        // }
        this.user.firstName="aniket";
    }
}