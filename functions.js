let items=["milk","bananas","bread","rice"]

let quantity=[50,30,10,34]


console.log("ORGIN INVETORY ITEMS")
console.log(items)



//Write a function to add a new item to the inventory, updating both arrays.
function addItems(a,b){   
    if(items.length>=10||quantity.length>=10){
        console.log("the stock has maximum ")
        return
    }
items.push(a)
 quantity.push(b)  
 console.log(`${a} has been added`) 
    
}
addItems("Mandazi",30)
//Write a function to update the stock quantity of an existing item.

function addQuantity(a,newB){
    const index= items.indexOf(a)

    if(index===-1){
        console.log(a+" not found")
        return
    }
        quantity.push(newB)
        console.log(a+" is updated with "+ newB+" as a quantity")
    
}
addQuantity("Mandazi",30)


console.log("NEW ARRAY OF ITEMS")
console.log(items)

console.log("NEW ARRAY OF QUANTITY")
console.log(quantity)



// Write a function to calculate the total number of items in the inventory.

function totalItems(){
   let total=0
   for(let i=0;i<quantity.length;i++){
   total+=quantity[i]
}
console.log(total+" is the total items")
}
totalItems()


// Write a function to find the item with the lowest stock quantity.
function minQuantityItem(items,quantity){
    let lowerItem=null
    let lowerQuantity=null
   for(let j=0; j<items.length; j++){

    const itemy=items[j]
    const quant=quantity[j]

    if (lowerQuantity===null||quant<lowerQuantity ){
    lowerItem=itemy
    lowerQuantity=quant

   }
}
return lowerItem
}
console.log("the item with minimum quantity is "+minQuantityItem(items,quantity))




