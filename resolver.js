import Books from './bookData.json';
import BookModel from './Models/author';

const Resolvers = {
    Query: {
        book: () => {
            return Books;

        },
        bookSearched: (root, { year }) => {
            return Books.find(ele => { return ele.year === year })
        }
    },
    Mutation: {
        addBooksToData: (root, { author, country, imageLink, language, link, pages, title, year }) => {
            const Book = new BookModel({
                author: author,
                country: country,
                 imageLink: imageLink, 
                language: language, 
                link: link,
                 pages: pages,
                 titile:title,
                 year:year
            })
            return Book.save();

        }
    }
}


export default Resolvers;
