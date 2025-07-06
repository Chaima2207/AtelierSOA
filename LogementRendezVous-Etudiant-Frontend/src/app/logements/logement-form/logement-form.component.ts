import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LogementService } from '../../services/logement.service';
import { Logement } from '../../models/Logement';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-logement-form',
  templateUrl: './logement-form.component.html',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  styleUrl: './logement-form.component.css'
})
export class LogementFormComponent implements OnInit {
  logementForm!: FormGroup;
  isEdit = false;
  reference!: number;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private ar: ActivatedRoute,
    private logementService: LogementService
  ) {}

  ngOnInit(): void {
    this.logementForm = this.fb.group({
      reference: [null, Validators.required],
      adresse: ['', Validators.required],
      delegation: ['', Validators.required],
      gouvernorat: [''],
      type: [''],
      description: [''],
      prix: [null, [Validators.required, Validators.min(0)]]
    });

    // Check if reference param exists
    const ref = this.ar.snapshot.params['ref'];
    console.log(ref);
    if (ref) {
      this.isEdit = true;
      this.reference = +ref;
      console.log(ref);
      console.log(this.reference);
      this.logementService.getByReference(this.reference).subscribe(logement => {
        console.log(logement);
        
        if (logement) {
          this.logementForm.patchValue(logement);
        }
      });
    }
  }

  onSubmit(): void {
    const logement: Logement = this.logementForm.value;
    if (this.isEdit) {
      this.logementService.update(this.reference, logement).subscribe(() => {
        alert('Logement mis à jour avec succès');
        this.router.navigate(['/logements']);
      });
    } else {
      this.logementService.add(logement).subscribe(() => {
        alert('Logement ajouté avec succès');
        this.router.navigate(['/logements']);
      });
    }
  }
}
