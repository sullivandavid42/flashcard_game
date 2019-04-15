import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface StringModel {
  profil: string;
  username: string;
  home: string;
  card: string;
  cards: string;
  settings: string;
}

const stringFr: StringModel = {
  profil: 'Mon profil',
  username: 'Pseudo',
  home: 'Accueil',
  card: 'Carte',
  cards: 'Cartes',
  settings: 'Paramètres',
};

@Injectable({
  providedIn: 'root'
})
export class StringService {

  constructor() { }

  public getStrings(): StringModel {
    return stringFr;
  }
}
