import { Component } from 'angular2/core';
import { Control, FORM_DIRECTIVES, FormBuilder } from 'angular2/common';
import * as Rx from 'rxjs';


@Component({
    selector: 'rxt',
    template: `
        <p style="font-weight: bold">label: {{value}}</p>
        <form [ngFormModel]="form">
            <div>
                <input type="text" ngControl="name" />
            </div>
        </form>
    `
})
export class RxTest {
    value: string;
    form: any;
    fb: FormBuilder;
    
    constructor(fb: FormBuilder) {
        this.form = fb.group({
            email: new Control(''),
            name: new Control('')
        });
        
        this.form.find('name').valueChanges.subscribe((val) =>{
            console.log('prop', val);
        })
    }
    
    ngAfterViewInit() {
    }
}
