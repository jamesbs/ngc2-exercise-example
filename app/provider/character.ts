import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CharacterService {
    static base = "http://swapi.co/api"

    constructor(private http: Http) {
    }
    
    getCharacter(id: number) {
        return this.http.get([CharacterService.base, "people", id].join('/'))
            .map(response => response.json());
    }
}
