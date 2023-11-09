function calculateCostProducts(Product,Quantity, Price){
    return "Product: "+Product+"\tQuantity: *"+Quantity+"\tPrice per Unit: $"+Price
}
let ShoppingDetail = ""
let Total = 0
let Choice = ""

do{
    let Welcome = alert("What would you like to buy Today?\t");
    let Choices = alert("1. Benie: $50   "+"\t2. Hat: $48   "+"\t3. Shirt: $55   "+"\t4. Shorts: $45   "+"\t5. Shoes: $100"); 
    let Product = prompt("Type name of the Product you Bought");
    let Quantity = Number(prompt("How many of the same Items you Bought"));
    let Price = Number(prompt("Type the Value"));

    ShoppingDetail = ShoppingDetail + calculateCostProducts(Product,Quantity, Price) + "\n"
    Total = Total + Price * Quantity

    alert(ShoppingDetail);

    Choice = prompt("Would you like to add something else to the Shopping Cart? 'y' or 'n'").toLowerCase();
}while (Choice != "n");
    alert (ShoppingDetail+"\n" +"The Grand Total is: $" + Total);
    