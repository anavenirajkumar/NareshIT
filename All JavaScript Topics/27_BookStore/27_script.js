class Book {
    constructor(bookName,isbn,author,category){
        this.bookName = bookName;
        this.isbn = isbn;
        this.author = author;
        this.category = category;
    }
}
class UIBook {

    // display Book
    static displayBook(book){
        let tableBody = document.querySelector('#table_body');
        let tableRow = document.createElement('tr');
        tableRow.innerHTML = `
                                <td>${book.bookName}</td>
                                <td>${book.isbn}</td>
                                <td>${book.author}</td>
                                <td>${book.category}</td>
                                <td>
                                    <a href="#">
                                        <i class="fa fa-times-circle delete"></i>
                                    </a>
                                </td>
                            `;
        tableBody.appendChild(tableRow);
        // display Message
        UIBook.displayValidationMessage('seagreen','Book is Added');
    }

    // validate Book
    static validateBook(book) {
        return UIBook.validateBookName(book) &&
               UIBook.validateISBN(book) &&
               UIBook.validateAuthor(book) &&
               UIBook.validateCategory(book);
    }


    // validate Book  Name
    static validateBookName(book){
        if(book.bookName === ''){
            UIBook.applyColors('#book_name');
            UIBook.displayValidationMessage('red','Book Name is Required');
            return false;
        }
        else{
            UIBook.removeColors('#book_name');
            return true;
        }
    }

    // validate ISBN
    static validateISBN(book){
        if(book.isbn === ''){
            UIBook.applyColors('#isbn');
            UIBook.displayValidationMessage('red','ISBN is Required');
            return false;
        }
        else{
            UIBook.removeColors('#isbn');
            return true;
        }
    }

    // validate Author
    static validateAuthor(book){
        if(book.author === ''){
            UIBook.applyColors('#author');
            UIBook.displayValidationMessage('red','Author is Required');
            return false;
        }
        else{
            UIBook.removeColors('#author');
            return true;
        }
    }

    // validate Category
    static validateCategory(book){
        if(book.category === ''){
            UIBook.applyColors('#category');
            UIBook.displayValidationMessage('red','Category is Required');
            return false;
        }
        else{
            UIBook.removeColors('#category');
            return true;
        }
    }

    // display validation message
    static displayValidationMessage(color,message){
        let messageDiv = document.querySelector('#msg-div');
        let paragraphElement = document.createElement('p');
        paragraphElement.style.backgroundColor = color;
        paragraphElement.innerText = message;
        messageDiv.appendChild(paragraphElement);
        setTimeout(UIBook.removeValidationMessage,2000);
    }

    // remove validation message
    static removeValidationMessage(){
        document.querySelector('#msg-div p').remove();
    }

    // apply colors
    static applyColors(elementId){
        let inputField = document.querySelector(elementId);
        inputField.style.border = '1px solid red';
        inputField.style.boxShadow = '0 0 10px red';
    }

    // remove colors
    static removeColors(elementId){
        let inputField = document.querySelector(elementId);
        inputField.style.border = '1px solid gray';
        inputField.style.boxShadow = '0 0 0px white';
    }

    // Clear the Form Fields
    static clearFormFields(){
        document.querySelector('#book_name').value = '';
        document.querySelector('#isbn').value = '';
        document.querySelector('#author').value = '';
        document.querySelector('#category').value = '';
    }

}

// Form Submission for Book Store
let bookStoreForm = document.querySelector('#bookstore-form');
bookStoreForm.addEventListener('submit',function(e) {
    // Prevent the Actual Form Submission
    e.preventDefault();

    // Get the Form data
    let bookName = document.querySelector('#book_name').value;
    let isbn = document.querySelector('#isbn').value;
    let author = document.querySelector('#author').value;
    let category = document.querySelector('#category').value;

    // Create a Book Object
    let book = new Book(bookName,isbn,author,category);

    // Validate the Book
    let isValidBook = UIBook.validateBook(book);

    if(isValidBook){
        // Display the Book
        UIBook.displayBook(book);
        UIBook.clearFormFields();
    }
});


// Delete Book Logic
let tableBody = document.querySelector('#table_body');
tableBody.addEventListener('click',function(e) {
    let targetElement = e.target;
    if(targetElement.classList.contains('delete')){
        targetElement.parentElement.parentElement.parentElement.remove();
        UIBook.displayValidationMessage('blue','Book is Removed');
    }
});