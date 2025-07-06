package webservices;

import entities.RendezVous;
import metiers.RendezVousBusiness;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.util.List;

@Path("/rendezVous")
public class RendezVousRessources {
	static RendezVousBusiness help = new RendezVousBusiness();

	@POST
	@Path("/add")
	@Consumes(MediaType.APPLICATION_JSON)
	public static Response addRendezVous(RendezVous rendezVous) {
		 help.addRendezVous(rendezVous);
		 return Response.
				status(200).header("Access-Control-Allow-Origin", "*").
				entity("ok").
				build();
	}

	@GET
	@Path("/getAll")
	@Produces(MediaType.APPLICATION_JSON)
	public static List<RendezVous> getListeRendezVous() {
		return help.getListeRendezVous();
	}
	@PUT
	@Path("/setLogements")
	@Consumes(MediaType.APPLICATION_JSON)
	public static void setListeRendezVous(List<RendezVous> listeRendezVous) {
		help.setListeRendezVous(listeRendezVous);
	}

	@GET
	@Path("/byLogRef/{reference}")
	@Produces(MediaType.APPLICATION_JSON)
	public static List<RendezVous> getListeRendezVousByLogementReference(@PathParam("reference") int reference) {
		return help.getListeRendezVousByLogementReference(reference);
	}

	@GET
	@Path("/byId/{id}")
	@Produces(MediaType.APPLICATION_JSON)
	public static RendezVous getRendezVousById(@PathParam("id") int id) {
		return help.getRendezVousById(id);
	}
	@DELETE
	@Path("/delete/{id}")
	@Produces(MediaType.APPLICATION_JSON)
	public static boolean deleteRendezVous(@PathParam("id") int id) {
		return help.deleteRendezVous(id);
	}
	@PUT
	@Path("/update/{idRendezVous}")
	@Produces(MediaType.APPLICATION_JSON)
	public static boolean updateRendezVous(@PathParam("idRendezVous") int idRendezVous, RendezVous updatedRendezVous) {
		return help.updateRendezVous(idRendezVous, updatedRendezVous);
	}
}
