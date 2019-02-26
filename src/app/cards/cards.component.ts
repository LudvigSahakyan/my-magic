import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TypesService } from '../shared/services/types.service';

@Component({
  selector: 'my-magic-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  public title: string;
  public query: string;
  public isLoading: boolean;

  constructor(private activeRoute: ActivatedRoute, private typesService: TypesService) {
    this.query = null;
    this.title = `My Magic`;
    this.isLoading = false;
  }

  toggleLoading() {
    this.isLoading = !this.isLoading;
  }

  ngOnInit() {
    if (null === this.query) {
      this.activeRoute.url.subscribe(
        () => this.query = this.activeRoute.snapshot.params['query']
      )
    }
  }

 

}