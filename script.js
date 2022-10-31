const container = document.getElementById('library');
var x = 0;
var array = [];


function book(title,autor,pageNumber){
  this.title = title
    this.autor = autor
    this.pageNumber = pageNumber
};

function addBookToLibrary()
{
    

    array[x]= new book(
        document.getElementById("title").value,         //add an objekt for an Array
        document.getElementById("autor").value,
        document.getElementById("pageNumber").value

    );
    x++;
    document.getElementById("autor").value = "";        //cleans the input field
    document.getElementById("title").value = "";
    document.getElementById("pageNumber").value = "";

    container.innerHTML = '';                           //cleans the output on the page
    array.forEach((result, idx) => {
      // Create card element
      const card = document.createElement('div');
      card.classList = 'card-body';
    
      // Construct card content
      const content = `
        <div class="card" id="card">
        <div class="card-header" id="heading-${idx}">
          <h5 class="mb-0">
            <input type="button" value="Delite" onclick="deliteCard(${idx});">
          </h5>
        </div>
    
        <div id="collapse-${idx}" class="collapse show" aria-labelledby="heading-${idx}" data-parent="#accordion">
          <div class="card-body">
    
            <h4>Book ${idx}</h4>
            <p>Title: ${result.title}</p>
            <p>Autor: ${result.autor}</p>
            <p>Page Number: ${result.pageNumber}</p>
            
          </div>
        </div>
      </div>
      `;
    
    
      // Append newyly created card element to the container
      container.innerHTML += content;
    })
    
}

function deliteCard(cardIndex){
    let indexForRemoval = cardIndex;
    array.splice(indexForRemoval,1);

        //removes element from the page
    document.getElementById("card").remove();

}
//I know that augmenting native DOM functions isn't always the best or most popular solution, but this works fine for modern browsers.
Element.prototype.remove = function() {
    this.parentElement.removeChild(this);
}
NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
    for(var i = this.length - 1; i >= 0; i--) {
        if(this[i] && this[i].parentElement) {
            this[i].parentElement.removeChild(this[i]);
        }
    }
}
