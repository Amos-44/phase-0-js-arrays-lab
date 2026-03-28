// inventoryManagement.js

//  Create the products array with 4 items
let products = ["Laptop", "Phone", "Headphones", "Monitor"];

//  Function to log the first product
function logFirstProduct() {
  console.log(products[0]);
}

//  Function to add a new product to the array
function addProduct(productName) {
  products.push(productName);
}

//  Function to update a product's name
function updateProductName(position, newName) {
  if (position >= 0 && position < products.length) {
    products[position] = newName;
  } else {
    console.log("Invalid position");
  }
}

//  Function to remove the last product from the array
function removeLastProduct() {
  products.pop();
}




// Export the necessary parts for testing
module.exports = {
  logFirstProduct: typeof logFirstProduct !== 'undefined' ? logFirstProduct : undefined,
  addProduct: typeof addProduct !== 'undefined' ? addProduct : undefined,
  updateProductName: typeof updateProductName !== 'undefined' ? updateProductName : undefined,
  removeLastProduct: typeof removeLastProduct !== 'undefined' ? removeLastProduct : undefined,
  products
};
