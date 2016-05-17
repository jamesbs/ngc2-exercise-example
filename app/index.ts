import { Component, provide } from '@angular/core';
import { FORM_PROVIDERS, FormBuilder } from '@angular/common';
import { HTTP_PROVIDERS } from '@angular/http';
import { bootstrap } from '@angular/platform-browser-dynamic';
import { Flashcard } from './flashcard/flashcard';
import { CharacterService } from './provider/character';

@Component({
    selector: 'app',
    directives: [ Flashcard ],
    template: `
      <h1>Hello World</h1>
      <flashcard></flashcard>
    `  
})
export default class App {
    private myCount: number = 20;
}

bootstrap(App, [
    HTTP_PROVIDERS,
    CharacterService
]);
