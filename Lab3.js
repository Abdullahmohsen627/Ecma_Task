let Foods = [
  "Burger",
  "Pizza",
  "Donuts",
  "Pizza",
  "Koshary",
  "Donuts",
  "Seafood",
  "Burger",
];
let uniqueFoods = new Set(Foods);
uniqueFoods.add("Pasta");
console.log(uniqueFoods);
uniqueFoods.delete("Burger");
console.log(uniqueFoods);

function check(S1) {
  if (S1.size > 2) {
    S1.clear();
  }
}
check(s1);
console.log(s1);
