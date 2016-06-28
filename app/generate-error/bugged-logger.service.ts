import { Injectable } from '@angular/core';

@Injectable()
export class BuggedLoggerService {
    logThis(message: string) {
        const log = console.log;
        log(message);
    }
}