var form = document.getElementById('addForm') ;
var itemList = document.getElementById('items') ;
var filter = document.getElementById('filter') ;

// Form Submit events.
form.addEventListener('submit' , addItem) ;

// Remove item
itemList.addEventListener('click' , removeItem) ;

// Filter event
filter.addEventListener('keyup' , filterItems) ;

// Add item.

function addItem(e) {
    e.preventDefault( ) ;

    // Get input value.
    var newItem = document.getElementById('item').value ;

    // Create new li element.
    var li = document.createElement('li') ;
    // add classname
    li.className = 'list-group-item' ;

    // Append text with input value.
    li.appendChild(document.createTextNode(newItem)) ;

    // create delete button element.
    var deleteButton = document.createElement('button') ;

    // Add class to delete button.
    deleteButton.className = ' btn btn-danger btn-sm float-right delete ' ;
   
    // append text node
    deleteButton.appendChild(document.createTextNode('X')) ;

    //append button to li.
    li.appendChild(deleteButton) ;
    //appent li to list
    itemList.appendChild(li) ;
}

// Remove Item.

function removeItem(e) {
    // Select the delete button only.
    if(e.target.classList.contains('delete')){
        // Confirmation
        if(confirm('Are you sure?')) {
            var li = e.target.parentElement ;
            itemList.removeChild(li) ;
        }
    }
}

function filterItems(e) {
    // Convert to lower case
    var text = e.target.value.toLowerCase() ;
    console.log(text) ;
    // Get list
   var items = itemList.getElementsByTagName('li') ;
    // convert to array
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent ;
        console.log(itemName) ;
        if(itemName.toLowerCase().indexOf(text) != -1) {
            item.style.display = 'block' ;
        } else {
            item.style.display = 'none' ;
        }
    } ) ;

}
