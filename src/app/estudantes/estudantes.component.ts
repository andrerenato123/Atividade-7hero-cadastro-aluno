import { Component, OnInit } from '@angular/core';
import { Estudante } from '../estudante';
@Component({
  selector: 'app-estudantes',
  templateUrl: './estudantes.component.html',
  styleUrls: ['./estudantes.component.css']
})
export class EstudantesComponent implements OnInit {
  estudante: Estudante = {
    id: 1,
    name: 'André Renato',
    instituicao: 'Fatec Itu',
    curso: 'ADS',
    telefone: '11 972678990',
  };

  constructor() { }

  ngOnInit(): void {
  }

}
