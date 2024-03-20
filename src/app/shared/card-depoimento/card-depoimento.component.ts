import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { Depoimento } from '../../core/types/type';

@Component({
  selector: 'app-card-depoimento',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './card-depoimento.component.html',
  styleUrl: './card-depoimento.component.scss'
})
export class CardDepoimentoComponent {
  @Input() depoimento!: Depoimento;
}
