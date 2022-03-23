import { LightningElement } from 'lwc';

export default class ParentDecoratorDemo extends LightningElement {
    updateUser()
    {
        this.template.querySelector('c-decoratorDemo3').updateUser();
    }
}