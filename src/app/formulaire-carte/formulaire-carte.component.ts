import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CarteService, Carte } from '../carte.service';

@Component({
  selector: 'app-formulaire-carte',
  standalone: true, 
  imports: [ReactiveFormsModule, CommonModule], // from parent
  templateUrl: './formulaire-carte.component.html',
  styleUrl: './formulaire-carte.component.css'
})
export class FormulaireCarteComponent {
  cardForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private carteService: CarteService) {
    this.cardForm = this.formBuilder.group({
      nomCarte: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]],
      codeCarte: ['', [Validators.required, Validators.pattern('^[0-9]{16}$')]],
      ccv: ['', [Validators.required, Validators.pattern('^[0-9]{3}$')]],
      expiration: ['', [Validators.required, Validators.pattern('^(0[1-9]|1[0-2])\/[0-9]{2}$')]]
    });
  }

  onSubmit() {
    if(this.cardForm.valid) {
      const carte: Carte = {
        id: 0, // service will auto-increment
        ...this.cardForm.value
      }

      this.carteService.addCarte(carte);
      this.cardForm.reset();
      console.log('Carte enregistrée', carte);
    } 
  }
}
