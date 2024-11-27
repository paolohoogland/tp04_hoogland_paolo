import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { FormulaireCarteComponent } from "./formulaire-carte/formulaire-carte.component";
import { AfficheCarteComponent } from './affiche-carte/affiche-carte.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule, FormulaireCarteComponent, AfficheCarteComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tp04_hoogland_paolo';
}