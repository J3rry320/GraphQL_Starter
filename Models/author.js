import Mongoose from 'mongoose';
import uuid from 'node-uuid';
const schema = Mongoose.Schema;
const BookData = new schema({
    id: { type: String, default: uuid.v1 },
    author: String,
    country: String,
    imageLink: String,
    language: String,
    link: String,
    pages: Number,
    titile: String,
    year: Number
})
const model=Mongoose.model('books',BookData);
export default model;
