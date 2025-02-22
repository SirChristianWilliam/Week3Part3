console.log('****** Part Supply *******');
// REQUIRED FEATURES
// 1. Create a variable called 'partsNeeded' with a value of the number 40 
//    & console.log the variable
console.log('1. Number of partsNeeded:');
let partsNeeded = 40;
console.log(partsNeeded);

// 2. Create a variable call 'supplyChanges' set it to an array containing
//    the following numbers: 3, 5, -6, 0, 7, 11
console.log('2. Array of supplyChanges:');
let supplyChanges = [3,5,-6,0,7,11];
console.log(supplyChanges);

// 3. Console log the value of the second item in the 'supplyChanges' array
console.log('3. Second supplyChange is:');
console.log(supplyChanges[1]);
console.log("However, the index is",supplyChanges.indexOf(supplyChanges[1]),", although it is the \
SECOND item in the array");

// 4. The last item was added by mistake. Remove it from the 'supplyChanges' 
//    array & console.log the value removed.
console.log('4. Removed item:');
console.log(supplyChanges.pop());
console.log("Updated array is now", supplyChanges);

// 5. A delivery of 25 more parts arrived. Add the value 25 to the end of the array
console.log('5. Adding 25 to supplyChanges.');
console.log(supplyChanges.push(25), "is the new length of the array");
console.log(supplyChanges[supplyChanges.length-1],"is the added item");
console.log("Updated array is now", supplyChanges);

// 6. Write a `for` loop that shows each value in the 'supplyChanges' array
//    Use a console.log formatted as follows, where x is the value from the array
//    - if it is a positive number (greater than 0), log 'Added x parts.' 
//    - if the value is 0, log 'No Change.'
//    - if the value is negative, format the log as 'Removed x parts.' 
console.log('6. Showing supplyChanges...');

 for(let x = 0; x < supplyChanges.length; x++) {
     console.log(supplyChanges[x],"at index", supplyChanges.indexOf(supplyChanges[x]));
};

for(let x = 0; x < supplyChanges.length; x++) {
    if(supplyChanges[x] > 0) {
        console.log('Added x parts.', supplyChanges[x]);
    } else if(supplyChanges[x] == 0) {
        console.log("No Change.", supplyChanges[x]);
    } else {
        console.log("Removed x parts.", supplyChanges[x]);
    }
    
};
for(let x = 0; x < supplyChanges.length; x++) {
    if(supplyChanges[x] > 0) {
        console.log("Added",supplyChanges[x],"parts");
    } else if(supplyChanges[x] == 0) {
        console.log("No Change.", supplyChanges[x]);
    } else {
        console.log("Removed",supplyChanges[x],"parts");
    }
    
};
//I added these three different examples for question 6 as the exact format (for the last two examples) 
// isn't very clear to me. At least my bases are covered now lol, but it is a little messier looking in
// the console now. 


// STRETCH GOALS
console.log('---  Stretch Goals  ---');
// 7. Rewrite the `for` loop from #6 as a `for of` loop. 
console.log('7. Showing supplyChanges with "for of" loop');
for(x of supplyChanges) {

    if(x > 0) {
        console.log('Added x parts.',x);
    } else if(x == 0) {
        console.log("No Change.",x);
    } else {
        console.log("Removed x parts.",x);
    }
  };

  for(x of supplyChanges) {

    if(x > 0) {
        console.log("Added",x,"parts");
    } else if(x == 0) {
        console.log("No Change.",x);
    } else {
        console.log("Removed",x,"parts");
    }
  };
  // I also added two variations for this one due to my comment after step 6. 

// 8. Write a loop to determine the total number of parts available by
//    adding up all the numbers in the 'supplyChanges' array.
console.log('8. Total supplies available is:');
let text = 0;
for(let x = 0; x < supplyChanges.length; x++) {
    text += supplyChanges[x];
    console.log(text);
}
console.log("The total number of available parts is",text);

// 9. We have a large stash of parts in our warehouse that we 
//    need to box up and get ready for shipment. 
//    There are 572 parts in total, and each box holds 7 parts.
//    Use a `while` loop to keep adding parts to boxes until
//    no more boxes can be filled.
//    Then log how many boxes were filled, and how many parts are left over.
console.log('9. Filling boxes with a "while" loop');
let box = 7;
let total = 572;
let starting = 0; 
let boxesTotal;
let adjustment=1;

while(total > starting) {
    starting += box;
    boxesTotal = (starting/box)-adjustment;
 };
console.log(boxesTotal," is the total number of boxes filled.");
 console.log(total+box-starting,"is the total amount of parts left over");


