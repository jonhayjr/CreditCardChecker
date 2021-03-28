// All valid credit card numbers
// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];


// Add your functions below:
function validateCred(arr) {
    const lastDigit = arr[arr.length - 1]; //Grab the last digit
    const newArray = arr.slice(0, arr.length - 1).reverse(); //Reverse order of array and exclude last digit
    let sum = 0; //Initialize Sum Variable
    for (let i = 0; i < newArray.length; i++) {
      let currentPosition = i + 1; //Current position of number is index + 1 so that position starts at 1
        if (currentPosition % 2 !== 0) //Check if current position is odd 
        {
          let doubledNumber = newArray[i] * 2; //Doubles number
          doubledNumber = doubledNumber > 9 ? doubledNumber - 9 : doubledNumber; //If doubled number is greater than 9, then 9 is subtracted
          sum += doubledNumber;    
        } else {
           sum += newArray[i];
        }
    }

   sum += lastDigit;
//If the sum modulo 10 is 0, then the credit card is valid.  If not, the card is invalid.
   if (sum % 10 === 0) { 
     return true;
   } else {
     return false;
   }
}



function findInvalidCards(arr) {
  const invalidArray = arr.filter(item => validateCred(item) === false)
  return invalidArray;
}
//console.log(findInvalidCards(batch));
const invalidCards = findInvalidCards(batch);

function idInvalidCardCompanies(arr) {
  const ccCompanies = [];
  arr.forEach(item => {
    const firstDigit = item[0]; //Grabs first digit of array
    if (firstDigit === 3 && ccCompanies.indexOf('Amex') < 0) {
      ccCompanies.push('Amex');
    } else if (firstDigit === 4 && ccCompanies.indexOf('Visa') < 0) {
      ccCompanies.push('Visa');
    } else if (firstDigit === 5 && ccCompanies.indexOf('Mastercard') < 0) {
      ccCompanies.push('Mastercard');
    } else if (firstDigit === 6 && ccCompanies.indexOf('Discover') < 0) {
      ccCompanies.push('Discover');
    } else if (firstDigit !== 3 && firstDigit !== 4 && firstDigit !== 5 && firstDigit !== 6) {
      console.log('Company not found.')
    }
  })
  return ccCompanies;
}

//console.log(idInvalidCardCompanies(invalidCards));

//Function creates array of numbers from string
function createNumberArray(str) {
  const numberArray = [];
  for (let i=0; i < str.length; i++) {
    let number = parseInt(str[i]);
    numberArray.push(number);
  }
  return numberArray;
}

//console.log(createNumberArray('4567869502455'));