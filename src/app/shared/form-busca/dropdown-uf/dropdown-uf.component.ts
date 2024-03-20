import { Component, Input, OnInit } from '@angular/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { UnidadeFederativaService } from '../../../core/services/unidade-federativa.service';
import { UnidadeFederativa } from '../../../core/types/type';

@Component({
  selector: 'app-dropdown-uf',
  standalone: true,
  imports: [
    MatFormFieldModule, 
    MatIconModule,
    MatInputModule,
    MatAutocompleteModule],
  templateUrl: './dropdown-uf.component.html',
  styleUrl: './dropdown-uf.component.scss'
})
export class DropdownUfComponent implements OnInit {
  @Input() label:string = '';
  @Input() iconePrefixo:string = '';
  unidadesFederativa: UnidadeFederativa[] = [];
  constructor(private unidadeFederativaService: UnidadeFederativaService){}

  ngOnInit(): void {
    this.unidadeFederativaService.Listar()
      .subscribe(res => {
        this.unidadesFederativa = res;
      });
  }
}
