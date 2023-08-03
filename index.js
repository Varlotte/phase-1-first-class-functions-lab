// Code your solution in this file!
const arrayOfDrivers = ["Antonia", "Nuru", "Amari", "Mo"];

const returnFirstTwoDrivers = () => arrayOfDrivers.slice(0, 2);
//is anonymous
//takes one argument, an array of Scuber's drivers (Antonia, Nuru, Amari, Mo)
//returns a new array (.map?) containing first two drivers (Antonia, Nuru)
//tests want things to "deeply equal" so strict equality operator?

const returnLastTwoDrivers = () => arrayOfDrivers.slice(-2);
//anonymous function
//takes one argument, an array continaing all Scuber's drivers
//returns new array containing last two drivers in the array (Amari, Mo)
//tests want things to "deeply equal" so strict equality operator?

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
//apparently this syntax is bad, according to tests? is syntax bad?
//an array containing the two functions, but why is the syntax bad?

function createFareMultiplier(num) {
  return (fare) => num * fare;
  //higher order function
  //takes in one argument (int)
  //returns a function that will multiply a fare for a ride by that int
}

const fareDoubler = (fare) => createFareMultiplier(2)(fare);
//assign a function returned by createFareMultiplier to this
//invoke createFareMultiplier() so that fareDoubler() accepts 1 argument (fare) and doubles it

const fareTripler = (fare) => createFareMultiplier(3)(fare);
//assign a function returned by createFareMultiplier to this
//invoke createFareMultiplier so that fareTripler takes 1 arg (fare) and triples it

function selectDifferentDrivers(arr, cb) {
  return cb(arr);
  //takes two arguments, an array of Scuber's drivers, and either returnFirstTwoDrivers() or returnLastTwoDrivers()
  //returns either the first or the last two drivers
}
