
class Book{
    constructor(title, pages, author){
        this.title = title
        this.pages = pages
        this.author = author;
    }
} 
class Page{
    constructor(paragraphs){
        this.content = paragraphs
    }
} 



module.exports = {
    Book, Page
}
