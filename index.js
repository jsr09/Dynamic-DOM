class Bookmark {
    constructor (name, link){
    this.name = name;
    this.link = link;

}  render(){

}
}
// console.log(newBook)

// creates link with input submit class
const submit = document.body.querySelector('button');

 //Function to pull user submitted user info
 submit.addEventListener('click', getVal);

function getVal(){
    let name = document.getElementsByClassName('bookmarkName')[0].value;
    let link  = document.getElementsByClassName('bookmarkLink')[0].value;
    const newBook = new Bookmark(name, link);
    newBook.render();
console.log(newBook);
    
}


 //function to filter between name and link
            //push name and link into array
//render function create list items

   