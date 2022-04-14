import { Component, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css'],
})
export class Exercice1Component implements OnInit {
  public compteur: number = 0;

  NewCompteurValue(value: number) {
    this.compteur = value;
  }

  constructor() {}

  ngOnInit() {}
}
