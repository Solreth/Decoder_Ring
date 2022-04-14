const caesarModule = (function () {
  // you can add any code you want within this function scope
  //prettier-ignore
  const alphabet = [
    "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
  ];

  function caesar(input, shift, encode = true) {
    if (!shift || shift === 0 || shift > 25 || shift < -25) return false;
    // if there is no shift input, shift = 0, shift is greater than 25, or shift is less than -25, return encode as false.
    if (encode === false) shift = -shift;
    // if encode === false then we will decode, turning shift -
    let output = [];
    for (const current of input.toLowerCase()) {
      if (alphabet.indexOf(current) === -1) {
        //the current input is lowercased and compared against the letters of the alphabet. If no comparisons are found, return as is
        output.push(current);
      }
      for (let i = 0; i < alphabet.length; i++) {
        if (current === alphabet[i]) {
          if (i + shift >= 26) {
            output.push(alphabet[i + shift - 26]);
          } else if (i + shift < 0) {
            output.push(alphabet[i + shift + 26]);
          } else {
            output.push(alphabet[i + shift]);
          }
        }
      }
    }
    return output.join("");
    // your solution code here
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
