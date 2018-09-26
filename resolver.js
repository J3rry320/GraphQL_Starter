import Books from './bookData.json';
const Resolvers = {
    Query :{
        Books:()=>{
            return Books;

        }
    }
}
export default Resolvers;
