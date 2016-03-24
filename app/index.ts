import 'reflect-metadata';
import 'zone.js/dist/zone';
import 'zone.js/dist/long-stack-trace-zone';
import { Component } from 'angular2/core';
import { bootstrap } from 'angular2/platform/browser';
import { Flashcard } from './flashcard/flashcard';

@Component({
    selector: 'app',
    directives: [ Flashcard ],
    template: `
      <h1>Hello World</h1>
      <flashcard></flashcard>
    `  
})
export default class App {
}

bootstrap(App);