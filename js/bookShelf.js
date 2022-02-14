const bookShelf = {
  books: ["The last kingdom", "Haze", "The guardian of dreams"],
  updateBook(oldName, newName) {
    // Change code below this line
        const findBook =  this.books.indexOf(oldName);
            console.log(findBook)
            
            
        this.books.splice(findBook, 1, newName)


            // Change code above this line
    },
    
};



bookShelf.updateBook("Haze", "Dungeon chronicles")

