import { Injectable, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormBuscaService {

  private formBuilderService = inject(FormBuilder);
  public formGroup = this.formBuilderService.group({
    somentIda: [false, Validators.required]
  });
}
