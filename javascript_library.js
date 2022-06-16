
let myLibrary=[];

function Book(title,author,page,read){
    this.title=title;
    this.author=author;
    this.page=page;
    this.read=read;
}

const addBook=document.querySelector('.submitbtn');
const clearLibrary=document.querySelector('.clearbtn')
const bookregDisplay=document.querySelector('.book_display')
const library_display=document.querySelector('.book_display')
const remove_entry=document.querySelector('.remove_entryBtn')

//clears libary display and resets myLibrary
function clearAll(){
    while(library_display.hasChildNodes()){
        library_display.removeChild(library_display.firstChild)
        myLibrary=[]
    }
}



//function clears user display
function clearDisplay(){
    document.getElementById('bookTitle').value=''
    document.getElementById('bookAuthor').value='';
    document.getElementById('bookPages').value='';
    document.getElementById('readStatus').value='';
}


function removeBook(i){
    const removed=myLibrary.splice(i,1)
    console.log(removed)
    showLibrary(myLibrary.length-1,myLibrary)
}



function showLibrary(library_size,myLibrary){
    ///let library_display=document.querySelector('.book_display')
    while(library_display.hasChildNodes()){
        library_display.removeChild(library_display.firstChild);
    }

    for (let i=0;i<=library_size;i++){
        let library_div=document.createElement('div')
        library_div.classList='books div'+i;
        library_div.setAttribute('id',i)
        //library_div.classList.add('div'+i)
        library_display.appendChild(library_div)

        //book title display
        let bookTitle_Label=document.createElement('div')
        bookTitle_Label.classList='bookTitle_Label'
        let title_label=document.createElement('h2')
        title_label.textContent='Book Title:'
        let bookTitle=document.createElement('h2')
        bookTitle.textContent=myLibrary[i].title
        bookTitle_Label.appendChild(title_label)
        bookTitle_Label.appendChild(bookTitle)
        library_div.appendChild(bookTitle_Label)

        //book author display
        let bookAuthor_Label=document.createElement('div')
        bookAuthor_Label.classList='bookAuthor_Label'
        let author_label=document.createElement('h2')
        author_label.textContent='Author:'
        let bookAuthor=document.createElement('h2')
        bookAuthor.textContent=myLibrary[i].author
        bookAuthor_Label.appendChild(author_label)
        bookAuthor_Label.appendChild(bookAuthor)
        library_div.appendChild(bookAuthor_Label)

        //book pages display
        let bookPage_Label=document.createElement('div')
        bookPage_Label.classList='bookPage_Label'
        let page_label=document.createElement('h2')
        page_label.textContent='Total Pages:'
        let bookPages=document.createElement('h2')
        bookPages.textContent=myLibrary[i].page
        bookPage_Label.appendChild(page_label)
        bookPage_Label.appendChild(bookPages)
        library_div.appendChild(bookPage_Label)
        

        //book read display
        let bookRead_Direction=document.createElement('div');
        bookRead_Direction.classList='bookRead_Directions'
        bookRead_Direction.textContent='CLICK TO CHANGE STATUS'
        library_div.appendChild(bookRead_Direction)

        //book read display
        let statusRead_Label=document.createElement('div')
        statusRead_Label.classList='statusRead_Label'
        let status_Label=document.createElement('button')
        let temp_readStatus=myLibrary[i].read
        status_Label.textContent='Status:'+temp_readStatus
        statusRead_Label.appendChild(status_Label)
        library_div.appendChild(statusRead_Label)

        //remove button
        let remove_entryBtn=document.createElement('div')
        remove_entryBtn.classList='remove_entryBtn'
        let remove_Button=document.createElement('button')
        remove_Button.textContent='Delete Entry'
        remove_entryBtn.appendChild(remove_Button)
        library_div.appendChild(remove_entryBtn)

        

        //update read status based on click
        status_Label.addEventListener('click',()=>{
        if(temp_readStatus=='Read'){
            myLibrary[i].read='Not Read'
            status_Label.style.color='red'
            status_Label.textContent='Status:'+myLibrary[i].read
            temp_readStatus='Not Read'
        }else if (temp_readStatus=='Not Read'){
            myLibrary[i].read='Read'
            temp_readStatus='Read'
            status_Label.style.color='green'
            status_Label.textContent='Status:'+myLibrary[i].read
        }
        })

        
        remove_Button.addEventListener('click',()=>{
            removeBook(i)
        })




        }


     
        
        
}





//EVENT LISTENERS
//on button click get user info and stores values
addBook.addEventListener('click',()=>{
    const bookTitle=document.getElementById('bookTitle').value
    const bookAuthor=document.getElementById('bookAuthor').value
    const bookPages=document.getElementById('bookPages').value
    const read=document.getElementById('readStatus').value

    //check if booktitle, bookAuthor bookPages are not blank
    if (bookTitle=='' || bookAuthor==''||bookPages==''){
        alert("Please fill in all values:")
        return
    }else{
        let books=new Book(bookTitle, bookAuthor,bookPages,read);
        myLibrary.push(books)
        clearDisplay()
        showLibrary(myLibrary.length-1,myLibrary)


    }

})

clearLibrary.addEventListener('click',()=>{
    clearDisplay()
    //display alert re clearning all data
    clearAll()
})






/*
function showBookDisplay(bookregDisplay){
    //create book label and input
    const div=document.createElement('div')
    div.className='bookLabel_Input'
    const bookLabel=document.createElement("div");
    bookLabel.innerHTML='Book Title:'
    const bookInput=document.createElement('input')
    bookInput.className='bookName'
    div.appendChild(bookLabel);
    div.appendChild(bookInput);
    bookregDisplay.appendChild(div);

    //create author and input
    const authorLabel_Input=document.createElement('div')
    const authorLabel=document.createElement("div");
    authorLabel.innerHTML='Author Name:'
    const authorInput=document.createElement('input')
    authorInput.className="authorName"
    authorLabel_Input.appendChild(authorLabel);
    authorLabel_Input.appendChild(authorInput);
    bookregDisplay.appendChild(authorLabel_Input);

    //create pagenumber and input
    const pageLabel_Input=document.createElement('div');
    const pageLabel=document.createElement('div');
    pageLabel.innerHTML='Select the number of pages:'
    const pagenumberInput=document.createElement('input')
    pagenumberInput.className='pageNumber'
    pageLabel_Input.appendChild(pageLabel);
    pageLabel_Input.appendChild(pagenumberInput);
    bookregDisplay.appendChild(pageLabel_Input);

    

    //checkbox is book read
    const checkbox=documentc.createElement('div')
    const readCheckbox=document.createElement('input')
    readCheckbox.type='checkbox'
    readCheckbox.className="bookRead"
    const readCheckbox_Label=document.createElement('div')
    readCheckbox_Label.innerHTML="Did you read the book?"
    checkbox.appendChild(readCheckbox_Label);
    checkbox.appendChild(readCheckbox);
    bookregDisplay.appendChild(checkbox);

    //create submit button
    const submitButton=document.createElement('button');
    submitButton.innerHTML='Submit';
    bookregDisplay.appendChild(submitButton);

}
*/