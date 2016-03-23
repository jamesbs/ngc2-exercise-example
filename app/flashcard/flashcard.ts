import { Component } from 'angular2/core';

@Component({
    selector: 'flashcard',
    template: `
        <p>My name is {{name}}</p>
    `,
    styles: [`
        p {
            border: 1px solid grey;
            background: #eee;
            display: inline-block;
            padding: 20px;
        }
    `]
})
export class Flashcard {
    name: string;
    
    constructor() {
        this.name = "flash";
    }
    
    getName(): string {
        return this.name;
    }
}
