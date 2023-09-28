//Fizz Buzz
//Create a script that counts one to 100
// for everything thats a muliple of 3 print "Fizz"
// for everthing that is a multiple of 5 pring "Buzz"
// for everything that is a multiple of 3 and 5 pring "fizzBuzz"

for (let i = 1; i <= 100; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log("FizzBuzz");
  } else if (i % 3 == 0) {
    console.log("Fizz");
  } else if (i % 5 == 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
