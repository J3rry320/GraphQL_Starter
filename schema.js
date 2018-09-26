import { makeExecutableSchema } from 'graphql-tools'
import resolvers from './resolver'
const typeDefs = `

type Books{
    id:String
    author:String,
    country:String,
    imageLink:String,
    language:String,
    link:String,
    pages:Int,
    titile:String,
    year:Int
}
type Query {
    
    book:[Books],
    bookSearched(year:Int):Books
}
type Mutation {
    addBooksToData(author:String,country:String,imageLink:String,language:String,link:String,pages:Int,title:String,year:Int):Books
}
`
const schema = makeExecutableSchema({ typeDefs,resolvers });

export default schema;

