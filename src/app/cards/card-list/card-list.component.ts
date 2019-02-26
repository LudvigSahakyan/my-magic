import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { CardListModel } from 'src/app/shared/models/magicthegathering/card-list.model';
import { CardModel } from 'src/app/shared/models/magicthegathering/card.model';
import { MagicTheGatheringService } from 'src/app/shared/services/magic-the-gathering.service';
import { TypesService } from 'src/app/shared/services/types.service';
import { Router } from '@angular/router';

@Component({
  selector: 'my-magic-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit, OnChanges {

  @Input() type: string;

  @Output() onBeforeCards: EventEmitter<boolean>;
  @Output() onLoadCards: EventEmitter<boolean>;

  public types: string[];
  public cards: CardModel[];

  constructor(private magicTheGatheringService: MagicTheGatheringService,
    private typesService: TypesService,
    private router: Router
  ) {
    this.onBeforeCards = new EventEmitter(true);
    this.onLoadCards = new EventEmitter(true);
    this.cards = [];
  }

  ngOnInit() { }

  ngOnChanges() {
    if (!this.type) {
      this.loadAllCards();
      return;
    }
    if (!this.typesService.isType(this.type)) {
      this.router.navigate(['/cards']);
      return;
    }
    this.loadCards();
  }
  loadCards() {

    this.onBeforeCards.emit(true);

    this.magicTheGatheringService.getCardsByType(this.type).subscribe(
      (data: CardListModel) => {
        this.cards = data.cards;
        this.onLoadCards.emit(true);
        () => { }
      });

  }
  loadAllCards() {

    this.onBeforeCards.emit(true);

    this.magicTheGatheringService.getCards().subscribe(
      (data: CardListModel) => {
        this.cards = data.cards;
        this.onLoadCards.emit(true);
      }
    )
  }
}