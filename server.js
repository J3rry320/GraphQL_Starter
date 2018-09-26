import express from 'express';
import schema from './schema'
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import BodyParser from 'body-parser';

const server = express();
server.use('/graphiql', graphiqlExpress({
    endpointURL: "/graphql"
}));
server.use('/graphql', BodyParser.json(), graphqlExpress({ schema }))
server.listen(4000, () => {
    console.log('listening on port 4000');
});