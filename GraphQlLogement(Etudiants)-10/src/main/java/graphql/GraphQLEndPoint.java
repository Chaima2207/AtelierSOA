package graphql;
import com.coxautodev.graphql.tools.SchemaParser;
import graphql.schema.GraphQLSchema;
import graphql.servlet.SimpleGraphQLServlet;
import repository.LogementRepository;
import repository.RendezVousRepository;

import javax.servlet.annotation.WebServlet;

@WebServlet(urlPatterns = "/graphql")
public class GraphQLEndPoint extends SimpleGraphQLServlet {

    public GraphQLEndPoint() {
        super(buildSchema());
    }

    private static GraphQLSchema buildSchema() {
        RendezVousRepository rdvRepo= new RendezVousRepository();
        return SchemaParser.newParser()
               .file("schema.graphql")
               .resolvers(new Querries(rdvRepo, new LogementRepository()))
               .build()
               .makeExecutableSchema();

    }

}
