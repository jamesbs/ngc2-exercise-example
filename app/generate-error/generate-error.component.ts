import { Component } from '@angular/core';
import { BuggedLoggerService } from './bugged-logger.service';

@Component({
    selector: 'ngc2-generate-error',
    moduleId: module.id,
    viewProviders: [ BuggedLoggerService ],
    styleUrls: ['generate-error.component.css'],
    templateUrl: 'generate-error.component.html'
})
export class GenerateErrorComponent {
    constructor(private buggedLoggerService: BuggedLoggerService) {
    }

    generateError() {
        const error = 'I have an error';

        this.buggedLoggerService.logThis(error);
    }
}
