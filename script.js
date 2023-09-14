// Your Script here.

const lookup = {
  A: "N",
  B: "O",
  C: "P",
  D: "Q",
  E: "R",
  F: "S",
  G: "T",
  H: "U",
  I: "V",
  J: "W",
  K: "X",
  L: "Y",
  M: "Z",
  N: "A",
  O: "B",
  P: "C",
  Q: "D",
  R: "E",
  S: "F",
  T: "G",
  U: "H",
  V: "I",
  W: "J",
  X: "K",
  Y: "L",
  Z: "M",
  "?": "?",
  ",": ",",
};

function rot13(encodedStr) {
  return encodedString.split('').map(function(char){
	   if (/[A-Z]/.test(char)) {
      // Shift the character code by 13 positions, wrapping around if necessary
      const charCode = char.charCodeAt(0);
      const shiftedCharCode = charCode >= 78 ? charCode - 13 : charCode + 13;
      return String.fromCharCode(shiftedCharCode);
		   } else {
      // Non-alphabetic characters remain unchanged
      return char;
    }
	  }).join('');
}// Your Result goes here
  // Only change code below this line

  return; //return decodedArr
}
const encodedString = "GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.";
const decodedString = rot13(encodedString);
console.log(decodedString);
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

// console.log(rot13("SERR YBIR? NPPVBWBO"));

// Do not change this line
window.rot13 = rot13;
