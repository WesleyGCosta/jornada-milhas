import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-form-busca',
  standalone: true,
  imports: [
    CardComponent, 
    MatButtonToggleModule, 
    MatIconModule,
    MatChipsModule,
    MatFormFieldModule,
    MatInputModule],
  templateUrl: './form-busca.component.html',
  styleUrl: './form-busca.component.scss'
})
export class FormBuscaComponent {

}
