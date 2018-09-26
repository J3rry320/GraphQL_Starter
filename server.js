import express from 'express';
import schema from './schema';
import Mongoose from 'mongoose';

import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import BodyParser from 'body-parser';

const server = express();
server.use('/graphiql', graphiqlExpress({
    endpointURL: "/graphql"
}));
Mongoose.connect("mongodb://localhost/graphQlTutorial");
const connection=Mongoose.connection;
connection.once('open',()=>{
    console.log("Connection to the data base was successfull");
    
})
server.use('/graphql', BodyParser.json(), graphqlExpress({ schema }))
server.listen(4000, () => {
    console.log('listening on port 4000');
});