import { Injectable } from 'angular2/core';

@Injectable()
export class CharacterService {
    getName() {
        return Promise.resolve('Flash');
    }
}
