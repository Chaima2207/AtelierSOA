import { Routes } from '@angular/router';
import { LogementListComponent } from './logements/logement-list/logement-list.component';
import { RendezVousListComponent } from './rendezvous/rendez-vous-list/rendez-vous-list.component';
import { HomeComponent } from './home/home/home.component';
import { LogementFormComponent } from './logements/logement-form/logement-form.component';
import { RendezVousFormComponent } from './rendezvous/rendez-vous-form/rendez-vous-form.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'logements', component: LogementListComponent },
    { path: 'logements/new', component: LogementFormComponent },
    { path: 'logements/:ref', component: LogementFormComponent },
    { path: 'rendezvous', component: RendezVousListComponent },
    { path: 'logement/rendezvous/:ref', component: RendezVousFormComponent },
    { path: 'rendezvous/edit/:id', component: RendezVousFormComponent }
];
