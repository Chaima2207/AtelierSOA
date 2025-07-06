import { Logement } from "./Logement";

export interface RendezVous {
  id: number;
  date: string;
  heure: string;
  logement: Logement;
  numTel: string;
}