import { Component, OnInit, Input, OnChanges, EventEmitter, Output } from '@angular/core';
import { CardModel } from 'src/app/shared/models/magicthegathering/card.model';
import { CardListModel } from 'src/app/shared/models/magicthegathering/card-list.model';
import { MagicTheGatheringService } from 'src/app/shared/services/magic-the-gathering.service';
import { TypesService } from 'src/app/shared/services/types.service';
import { Router } from '@angular/router';

@Component({
  selector: 'my-magic-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit, OnChanges {

  @Input() id: string;

  @Output() onBeforeCards: EventEmitter<boolean>;
  @Output() onLoadCards: EventEmitter<boolean>;

  public card: CardModel;

  constructor(private magicTheGatheringService: MagicTheGatheringService,
    private typesService: TypesService,
    private router: Router
  ) {

    this.onBeforeCards = new EventEmitter();
    this.onLoadCards = new EventEmitter();
  }

  ngOnInit() { }

  ngOnChanges() {
    if (!this.id) {
      return;
    }
    this.loadCard();
  }

  loadCard() {

    this.onBeforeCards.emit(true);
    this.magicTheGatheringService.getCardsById(this.id).subscribe(
      (data: CardListModel) => {
        this.card = data.cards[0];
        this.onLoadCards.emit(true);
        () => { }
      }
    );

  }
}