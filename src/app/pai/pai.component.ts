import { Component, OnInit } from '@angular/core';
import { Family } from '../share/class/Family';

@Component({
  selector: 'app-pai',
  templateUrl: './pai.component.html',
  styleUrls: ['./pai.component.scss']
})
export class PaiComponent implements OnInit {

    private family: Array<Family>;

    constructor() { }

    ngOnInit() {
        this.createFamily();
    }

    createFamily(): void {
      this.family = [
          {
            name: 'Vitor',
            lastName: 'Borges',
            age: 10
          },
          {
            name: 'Emerson',
            lastName: 'Daniel',
            age: 25
          },
          {
            name: 'Thiago',
            lastName: 'Contre',
            age: 30
          }
        ];
      console.log( this.family );
    }

  // Recebe emit Output do Filho
  reciverFeedback(answerSon) {
    this.family.push(answerSon);
    // Foi emitido o evento do filho e chegou no pai
    console.log(answerSon);
    // Família completa
    console.log(this.family);
  }

}
