import { Component } from 'angular2/core';
import * as Rx from 'rxjs';


@Component({
    selector: 'rxt',
    template: `
        <p style="font-weight: bold">label: {{value}}</p>
    `
})
export class RxTest {
    value: string;
    constructor() {}
    
    ngOnInit() {
        const obs = new Rx.Observable((subscriber) => {
            console.log('Im a subscriber');
            console.log(subscriber);
        })
    }
}
