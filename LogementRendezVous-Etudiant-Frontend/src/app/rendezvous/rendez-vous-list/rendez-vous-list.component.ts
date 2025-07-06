import { Component } from '@angular/core';
import { RendezVous } from '../../models/RendezVous';
import { RendezvousService } from '../../services/rendezvous.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-rendez-vous-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rendez-vous-list.component.html',
  styleUrl: './rendez-vous-list.component.css'
})
export class RendezVousListComponent {
  rendezvousList: RendezVous[] = [];

  constructor(private rendezVousService: RendezvousService) {}

  ngOnInit(): void {
    this.loadRendezVous()
  }
  loadRendezVous(): void {
    this.rendezVousService.getAll().subscribe(data => this.rendezvousList = data);
  }
  delete(id: number): void {
    this.rendezVousService.delete(id).subscribe(() => {
      this.rendezvousList = this.rendezvousList.filter(r => r.id !== id);
    });
  }
}
