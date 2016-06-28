import 'es6-shim';
import { Component, provide } from '@angular/core';
import { FORM_PROVIDERS, FormBuilder } from '@angular/common';
import { HTTP_PROVIDERS } from '@angular/http';
import { bootstrap } from '@angular/platform-browser-dynamic';
import { GenerateErrorComponent } from './generate-error/generate-error.component';
import { HttpCallComponent } from './http-call/http-call.component';
import { CharacterService } from './provider/character';

@Component({
    selector: 'app-component',
    directives: [ GenerateErrorComponent, HttpCallComponent ],
    template: `
      <ngc2-generate-error></ngc2-generate-error>
      <ngc2-http-call></ngc2-http-call>
    `  
})
export default class App {
    private myCount: number = 20;
}

bootstrap(App, [
    HTTP_PROVIDERS,
    CharacterService
]);
