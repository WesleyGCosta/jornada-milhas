import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule} from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
import { FormBuscaService } from '../../core/services/form-busca.service';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { DropdownUfComponent } from './dropdown-uf/dropdown-uf.component';

@Component({
  selector: 'app-form-busca',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [
    CardComponent, 
    MatButtonToggleModule, 
    MatIconModule,
    MatChipsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatButtonModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    DropdownUfComponent],
  templateUrl: './form-busca.component.html',
  styleUrl: './form-busca.component.scss'
})
export class FormBuscaComponent {
  constructor(public dialog: MatDialog, public formBuscaService: FormBuscaService) {}
  
  openDialog() {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '50%'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}

