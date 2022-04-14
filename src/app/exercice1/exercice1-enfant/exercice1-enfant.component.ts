import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-exercice1-enfant',
  templateUrl: './exercice1-enfant.component.html',
  styleUrls: ['./exercice1-enfant.component.css'],
})
export class Exercice1EnfantComponent implements OnInit {
  @Input() compteur: number;
  @Output() private sendNewCompteurValue: EventEmitter<number> =
    new EventEmitter();

  changeCompteurValue({ target }: Event) {
    const { value } = (target as HTMLButtonElement).dataset;

    if (value === 'increment')
      this.sendNewCompteurValue.emit(this.compteur + 1);
    else this.sendNewCompteurValue.emit(this.compteur - 1);
  }

  constructor() {}

  ngOnInit() {}
}
