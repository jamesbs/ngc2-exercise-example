System.register(['zone.js/dist/zone', 'zone.js/dist/long-stack-trace-zone', 'reflect-metadata', 'angular2/core', 'angular2/platform/browser', './flashcard/flashcard', 'angular2/http', './provider/character'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, browser_1, flashcard_1, http_1, character_1;
    var App;
    return {
        setters:[
            function (_1) {},
            function (_2) {},
            function (_3) {},
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (flashcard_1_1) {
                flashcard_1 = flashcard_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (character_1_1) {
                character_1 = character_1_1;
            }],
        execute: function() {
            App = (function () {
                function App() {
                    this.myCount = 20;
                }
                App = __decorate([
                    core_1.Component({
                        selector: 'app',
                        directives: [flashcard_1.Flashcard],
                        template: "\n      <h1>Hello World</h1>\n      <flashcard></flashcard>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], App);
                return App;
            }());
            exports_1("default", App);
            browser_1.bootstrap(App, [
                http_1.HTTP_PROVIDERS,
                character_1.CharacterService
            ]);
        }
    }
});
