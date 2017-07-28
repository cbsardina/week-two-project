// Since the `data.js` file is loaded in your `index.html` before this one,
// you have access to the `data` variable that contains the Etsy Store data.
// Open your `index.html` page in your browser and you can verify that the following
// is properly working. The `data` variable is an array with 25 items in it
console.log(data);

// 1: Show me how to calculate the average price of all items.
function question1 () {
  let totalPrice = 0;
  for (let i = 0; i < data.length; i++) {
    totalPrice = totalPrice + data[i].price;
  }
  let averagePrice = Math.round(((totalPrice/25) + 0.00001) * 100) / 100;
  console.log("The average price is " + averagePrice);
}

// 2: Show me how to get an array of items that cost between $14.00 and $18.00 USD
function question2 () {
  let priceRange = [];
  for (let i = 0; i < data.length; i++) {
    if ((data[i].price >= 14.00) && (data[i].price <= 18.00)) {
      priceRange.push(1*[i] + ". " + data[i].title);
    }
  }
  console.log(priceRange);
}

// 3: Which item has a "GBP" currency code? Display it's name and price.
function question3 () {
  for (let i = 0; i < data.length; i++) {
    if (data[i].currency_code === "GBP")
    console.log(data[i].title + " " + data[i].price + " pounds.");
  }
}


// 4: Display a list of all items who are made of wood.
function question4 () {
  for (let i = 0; i < data.length; i++){
    for (let j = 0; j < data[i].materials.length; j++){
      if (data[i].materials[j] === "wood") {
        console.log(1*[i] + ". " + data[i].title);
      }
    }
  }
}

// 5: Which items are made of eight or more materials?
//    Display the name, number of items and the items it is made of.
function question5 () {
  for (let i = 0; i < data.length; i++) {
    let materialsArray = [];
    if (data[i].materials.length >= 8) {
      materialsArray.push(data[i].materials);
      console.log(1*[i] + ". || NAME: " + data[i].title + " || NUMBER OF ITEMS: " + data[i].materials.length);
      console.log(materialsArray);
      // console.log(1*[i] + ". || NAME: " + data[i].title + " || NUMBER OF ITEMS: " + data[i].materials.length + " || MATERIALS: " + data[i].materials);
    }
  }
}
// -----
// I also used as a stand alone but it just listed the materials array with a series of ,,,, which was less readable.
//   console.log(1*[i] + ". || NAME: " + data[i].title + " || NUMBER OF ITEMS: " + data[i].materials.length + " || MATERIALS: " + materialsArray);
// This was with the materialsArray variable.
// -----
// This below yielded the same as above without adding the materialsArray variable:
//   console.log(1*[i] + ". || NAME: " + data[i].title + " || NUMBER OF ITEMS: " + data[i].materials.length + " || MATERIALS: " + data[i].materials);
// -----

// 6: How many items were made by their sellers?
// Answer:
function question6 () {
  let count = 0;
  for (let i = 0; i < data.length; i++) {
    if (data[i].who_made === "i_did") {
      count += 1;
    }
  }
  console.log(count + " items were made by their sellers.");
}
