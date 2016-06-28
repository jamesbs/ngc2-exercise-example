import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    selector: 'ngc2-http-call',
    moduleId: module.id,
    templateUrl: './http-call.component.html'
})
export class HttpCallComponent {
    response: string;

    constructor(private http: Http) {
    }

    makeHttpCall() {
        const r = this.http.get('https://cors-test.appspot.com/test')
            .subscribe(response => {
                this.response = response.text();
            });
    }
}