import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filho',
  templateUrl: './filho.component.html',
  styleUrls: ['./filho.component.scss']
})
export class FilhoComponent implements OnInit {

  // Recebendo Array Familia
  @Input()
  receiveFamily;

  // Respondendo Pai
  @Output()
  answerFamily = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.printFamily();
    this.feedback();
  }

  printFamily(): void {
    // Recebendo Familia enviado do componente pai
    console.log(this.receiveFamily);
  }

  feedback() {
    // Resposta para o component pai
    this.answerFamily.emit({name: 'Gustavo', lastName: 'Caspirro', age: 25});
  }

}
