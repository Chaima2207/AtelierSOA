package webservices;

import entities.Logement;
import metiers.LogementBusiness;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.util.List;

@Path("/logement")
public class LogementRessources {
    static LogementBusiness help = new LogementBusiness();
    @GET
    @Path("/getAll")
    @Produces(MediaType.APPLICATION_JSON)
    public Response  getAll(){
        return Response.
                status(200).header("Access-Control-Allow-Origin", "*").
                entity(help.getLogements()).
                build();
    }

    @POST
    @Path("/add")
    @Consumes(MediaType.APPLICATION_JSON)
    public Response add(Logement logement){
        help.addLogement(logement);
        return Response.
                status(200).header("Access-Control-Allow-Origin", "*").
                entity("ok").
                build();
    }

    @DELETE
    @Path("/delete/{ref}")
    @Produces(MediaType.APPLICATION_JSON)
    public boolean deleteLogement(@PathParam("ref") int reference) {
        return help.deleteLogement(reference);
    }

    @GET
    @Path("/byDel/{deleguation}")
    @Produces(MediaType.APPLICATION_JSON)
    public List<Logement> getLogementsByDeleguation(@PathParam("deleguation") String deleguation) {
        return help.getLogementsByDeleguation(deleguation);
    }

    @GET
    @Path("/byRef/{ref}")
    @Produces(MediaType.APPLICATION_JSON)
    public Logement getLogementsByReference(@PathParam("ref") int reference) {
        return help.getLogementsByReference(reference);
    }

    @GET
    @Path("/listByRef/{ref}")
    @Produces(MediaType.APPLICATION_JSON)
    public List<Logement> getLogementsListeByref(@PathParam("ref") int reference) {
        return help.getLogementsListeByref(reference);
    }

    @PUT
    @Path("/setLogements")
    @Consumes(MediaType.APPLICATION_JSON)
    public void setLogements(List<Logement> logements) {
        help.setLogements(logements);
    }

    @PUT
    @Path("/update/{ref}")
    @Produces(MediaType.APPLICATION_JSON)
    public boolean updateLogement(@PathParam("ref") int reference, Logement logement) {
        return help.updateLogement(reference, logement);
    }
}