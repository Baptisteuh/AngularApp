import { HttpClient } from "@angular/common/http";
import { Injectable, OnInit } from "@angular/core";
import { Observable, tap } from "rxjs";
import { HpCharacter } from "../models/hp-character.model";

@Injectable({
    providedIn: 'root'
})
export class HpService {

    hpCharacter!: HpCharacter;

    constructor(private http: HttpClient) {}

    getAllCharacters(): Observable<HpCharacter[]> {
        return this.http.get<HpCharacter[]>('http://hp-api.herokuapp.com/api/characters');
    }

    getCharacterByName(name: string): HpCharacter {
        this.http.get<HpCharacter[]>('http://hp-api.herokuapp.com/api/characters').pipe(
            tap (hpCharacters => {
                for (const char of hpCharacters) {
                    if (char.name===name) {
                        this.hpCharacter = char;
                        break;
                    }
                }
            })
        ).subscribe();
        return this.hpCharacter;
    }
}