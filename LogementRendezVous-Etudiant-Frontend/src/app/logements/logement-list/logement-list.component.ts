import { Component } from '@angular/core';
import { LogementService } from '../../services/logement.service';
import { Logement } from '../../models/Logement';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-logement-list',
  standalone: true,
  imports: [CommonModule,RouterModule,FormsModule],
  templateUrl: './logement-list.component.html',
  styleUrl: './logement-list.component.css'
})

export class LogementListComponent {
  logements: Logement[] = [];
  
  constructor(private logementService: LogementService) {}

  ngOnInit(): void {
    this.loadLogements();
  }

  loadLogements(): void {
    this.logementService.getAll().subscribe((data) => (this.logements = data));
  }

  deleteLogement(ref: number): void {
    this.logementService.delete(ref).subscribe(() => this.loadLogements());
  }
 searchValue: string = '';

search() {
  const val = this.searchValue.trim();
  if (!val) return;

  if (!isNaN(+val)) {
    // numeric → reference
    this.logementService.getByReference(+val).subscribe(data => {
      this.logements = data ? [data] : [];
    });
  } else {
    // string → delegation
    this.logementService.getByDeleguation(val).subscribe(data => {
      this.logements = data;
    });
  }
}
}
