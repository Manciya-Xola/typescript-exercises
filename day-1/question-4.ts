// Question 4: Typing a function
// Add a type for Car then use this type for the function.
// Note: Year is an optional value
// Add a return type
type Car ={
  model:string;
  make:string;
  year?:number;
  isCoupe?:boolean;
}
const car1:Car = {
  model: 'Skyline GTR V-Spec II',
  make: 'Nissan',
  year: 1999,
  isCoupe: true,
};
const car2:Car = {
  model: 'Impreza WRX STi',
  make: 'Subaru',
  year: 1994,
};

function displayCar({ model, make, year, isCoupe }:Car) {
  if (isCoupe) {
    return `The car is a ${make} ${model}, made in ${year}. Is a coupe.`;
  }
  return `The car is a ${make} ${model}, made in ${year}.`;
}

displayCar(car1);
displayCar(car2);

export {};
