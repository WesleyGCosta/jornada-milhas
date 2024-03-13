import { Component, OnInit } from '@angular/core';
import { CardBuscaComponent } from '../../../shared/card-busca/card-busca.component';
import { PromocaoService } from '../../../core/services/promocao.service';
import { Promocao } from '../../../core/types/type';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-promocoes',
  standalone: true,
  imports: [CardBuscaComponent, NgFor],
  templateUrl: './promocoes.component.html',
  styleUrl: './promocoes.component.scss'
})
export class PromocoesComponent implements OnInit {
  promocoes!: Promocao[];

  constructor(private service: PromocaoService) {
  }

  ngOnInit(): void {
    this.service.listar()
    .subscribe(
      res => {
        console.log("ar")
        console.log(res)
        this.promocoes = res;
      }
    )
  }

}
