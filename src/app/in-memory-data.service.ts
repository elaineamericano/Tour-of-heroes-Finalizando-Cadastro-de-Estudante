import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Estudante } from './estudante';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const estudantes = [
      { id: 11, name: 'Alessandro Reis', idade: 12, responsavel:'Lucas Andrade', telefone: 15991557838, email:'chispirito@gmail.com'},
  { id: 12, name: 'Elaine Alves', idade: 15, responsavel:'Fernando Girardi', telefone: 15988085680, email:'camarco@gmail.com' },
  { id: 13, name: 'Yasmim Ruth', idade: 10, responsavel:'Patricia Otolano', telefone: 15996547867, email:'genesiomachado@gmail.com' },
  { id: 14, name: 'Isabelly Caroline', idade: 14, responsavel:'Gabriel Salomão', telefone: 15991667788, email:'sarrafopower@gmail.com' },
  { id: 15, name: 'Hellena Reis', idade: 16, responsavel:'André Galileu', telefone: 15991778800, email:'neimatogrosso@gmail.com' },
  { id: 16, name: 'Gercina da Silva', idade: 11, responsavel:'Barbara Silva', telefone: 159986789, email:'romanocavaco@gmail.com' },
  { id: 17, name: 'Alceu Rodrigues', idade: 12, responsavel:'Mariana Alcorão', telefone: 15991789056, email:'mecanica.face@gmail.com' },
  { id: 18, name: 'Tamires Gouveia', idade: 13, responsavel:'Bruna Menezes', telefone: 1599789098, email:'eletronica.tec@gmail.com' },
  { id: 19, name: 'Raimunda Alice' , idade: 17, responsavel:'Pedro Henrique', telefone: 15991912123, email:'ragameseinfocell@gmail.com'},
  { id: 20, name: 'Daiane Americano', idade: 16, responsavel:'Marcos da silva', telefone: 15991778855, email:'robalo.mei@gmail.com' }
    ];
    return {estudantes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(estudantes: Estudante[]): number {
    return estudantes.length > 0 ? Math.max(...estudantes.map(estudante => estudante.id)) + 1 : 11;
  }
}
