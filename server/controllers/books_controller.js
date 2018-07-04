let books = [];
let id = 0;

module.exports = {
    read : (req, res) => {
       return res.status(200).send(books);
    },
    create : (req, res) => {
        const { title, author } = req.body;
        let book = {
            id: id++,
            title: title,
            author: author
        }
        books.push(book);
        return res.status(200).send(books);
    },
    update : (req, res) => {
        let index = parseInt(req.params.id);
        if(!books[index]) {
            return res.status(404).send(`No book with id: ${index}`);
        }
        const { title, author} = req.body
        books[index] = {
            id: index,
            title: title || books[index].title,
            author: author || books[index].author
        }
        return res.status(200).send(books);
    },
    delete: (req, res) => {
        let index;
        books.forEach( (book , i) => {
            if(book.id === req.params.id) {
                index = i;
            }
        });
        // if(!books[index]) {
        //     return res.status(404).send(`No book with id: ${index}`);
        // }
        books.splice(index, 1);
        return res.status(200).send(books);
    }
};