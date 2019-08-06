const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

console.log("Food:");

let i = 0;
// Write a while loop that prints out the contents of ingredients:
while (i < ingredients.length){

  console.log(ingredients[i]);
  i++;
}
// Write a for loop that prints out the contents of ingredients:

for (let x = 0; x < ingredients.length; x++) {
  console.log(ingredients[x]);
}
// Write any loop (while or for) that prints out the contents of ingredients backwards;
let new_ingredients = ingredients.reverse();
for (let x = 0; x < ingredients.length; x++) {
  
  console.log(new_ingredietns[x]);
}
