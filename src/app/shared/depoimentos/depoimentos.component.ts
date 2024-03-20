import { Component, OnInit } from '@angular/core';
import { DepoimentoService } from '../../core/services/depoimento.service';
import { Depoimento } from '../../core/types/type';
import { CardDepoimentoComponent } from '../card-depoimento/card-depoimento.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-depoimentos',
  standalone: true,
  imports: [CardDepoimentoComponent, NgFor],
  templateUrl: './depoimentos.component.html',
  styleUrl: './depoimentos.component.scss'
})
export class DepoimentosComponent implements OnInit {

  depoimentos:Depoimento[] = [];

  constructor(private depoimentoService: DepoimentoService){}

  ngOnInit(): void {
    this.depoimentoService.Listar()
    .subscribe(res => {
      console.log(res)
      this.depoimentos = res;
    })
  }
}
