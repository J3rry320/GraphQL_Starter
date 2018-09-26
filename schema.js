import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools'
const typeDefs = `
type Person{
    name:String,
    age:Int,
    gender:String

}
type Books{
    author:String,
    country:String,
    imageLink:String,
    language:String,
    link:String,
    pages:Int,
    titile;String,
    year:Int
}
type Query {
    person:[Person],
    book:[Books]
}
`
const schema = makeExecutableSchema({ typeDefs });
addMockFunctionsToSchema({ schema });
export default schema;

