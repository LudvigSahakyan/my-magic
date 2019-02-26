import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CardListModel } from '../models/magicthegathering/card-list.model';

@Injectable({
  providedIn: 'root'
})
export class MagicTheGatheringService {

  constructor(private http: HttpClient) { }

  getCardsById(id: string): Observable<CardListModel> {
    return this.http.get<CardListModel>(`https://api.magicthegathering.io/v1/cards?id=${id}`);
  }

  getCardsByType(type: string): Observable<CardListModel> {
    return this.http.get<CardListModel>(`https://api.magicthegathering.io/v1/cards?type=${type}`);
  }

  getCards(): Observable<CardListModel> {
    return this.http.get<CardListModel>(`https://api.magicthegathering.io/v1/cards`);
  }

}

