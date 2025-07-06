import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

import { RendezvousService } from '../../services/rendezvous.service';
import { LogementService } from '../../services/logement.service';
import { RendezVous } from '../../models/RendezVous';
import { Logement } from '../../models/Logement';

@Component({
  selector: 'app-rendezvous-form',
  standalone: true,
  templateUrl: './rendez-vous-form.component.html',
  styleUrls: ['./rendez-vous-form.component.css'],
  imports: [ReactiveFormsModule, CommonModule],
})
export class RendezVousFormComponent implements OnInit {
  rendezvousForm!: FormGroup;
  selectedLogement: Logement | null = null;
  isEdit: boolean = false;
  logementIdFromRoute!: number;

  constructor(
    private fb: FormBuilder,
    private rendezVousService: RendezvousService,
    private logementService: LogementService,
    private router: Router,
    private ac: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // Get logement ID from query param or route param
    this.logementIdFromRoute = Number(this.ac.snapshot.params['ref']);

    this.rendezvousForm = this.fb.group({
      id: [null],
      date: ['', Validators.required],
      heure: ['', Validators.required],
      numTel: ['', [Validators.required, Validators.pattern('^[0-9]{8,15}$')]],
      logementReference: [this.logementIdFromRoute || null, Validators.required],
    });

    if (this.logementIdFromRoute) {
      this.loadLogementDetails(this.logementIdFromRoute);
    }
  }

  loadLogementDetails(ref: number): void {
    this.logementService.getByReference(ref).subscribe({
      next: (logement) => {
        this.selectedLogement = logement;
        this.rendezvousForm.patchValue({
          logementReference: logement.reference,
        });
      },
      error: () => alert('Erreur lors du chargement du logement.')
    });
  }

  onSubmit(): void {
    if (this.rendezvousForm.valid && this.selectedLogement) {
      const formValue = this.rendezvousForm.value;

      const rendezVous: RendezVous = {
        id: formValue.id,
        date: formValue.date,
        heure: formValue.heure,
        numTel: formValue.numTel,
        logement: this.selectedLogement, // Attach logement object
      };

      this.rendezVousService.add(rendezVous).subscribe({
        next: () => {
          alert('✅ Rendez-vous ajouté avec succès!');
          this.router.navigate(['/logements']);
        },
        error: () => alert("❌ Erreur lors de l'ajout du rendez-vous.")
      });
    }
  }
}
