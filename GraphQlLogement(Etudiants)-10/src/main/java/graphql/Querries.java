package graphql;

import com.coxautodev.graphql.tools.GraphQLRootResolver;
import entite.Logement;
import entite.RendezVous;
import repository.LogementRepository;
import repository.RendezVousRepository;

import java.util.List;

public class Querries implements GraphQLRootResolver {
    public RendezVousRepository rdvRepo;
    public LogementRepository logRepo;
    public Querries(RendezVousRepository rdvRepo,LogementRepository logRepo) {
        this.rdvRepo = rdvRepo;
        this.logRepo = logRepo;
    }
    public List<RendezVous> allRendezVous(){
        return rdvRepo.getListeRendezVous();
    }
    public List<Logement> allLogement(){
        return logRepo.getAllLogements();
    }
}
