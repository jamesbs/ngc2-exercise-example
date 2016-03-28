import 'zone.js/dist/zone';
import 'zone.js/dist/long-stack-trace-zone';
import 'reflect-metadata';
import { Component, provide } from 'angular2/core';
import { bootstrap } from 'angular2/platform/browser';
import { Flashcard } from './flashcard/flashcard';
import { HTTP_PROVIDERS, Http } from 'angular2/http';
import { CharacterService } from './provider/character';
import { RxTest } from './temp/rxt';

@Component({
    selector: 'app',
    directives: [ Flashcard, RxTest ],
    template: `
      <h1>Hello World</h1>
      <flashcard></flashcard>
      <rxt></rxt>
    `  
})
export default class App {
    private myCount: number = 20;
}

bootstrap(App, [
    HTTP_PROVIDERS,
    CharacterService
]);
