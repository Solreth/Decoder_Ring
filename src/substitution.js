const substitutionModule = (function () {
  //prettier-ignore
  let alpha = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

  function substitution(input, alphabet, encode = true) {
    if (!alphabet || alphabet.length !== 26) {
      return false;
    }

    let delta, kappa;
    let omega = input.toLowerCase();
    let loopPairedLetters = 0;

    // should return 26 matches when checking against self in a looped loop
    for (const beta of alphabet) {
      for (const sigma of alphabet) {
        if (beta === sigma) {
          loopPairedLetters++;
        }
      }
    }
    if (loopPairedLetters != 26) {
      return false;
    }

    // swaps the roles of alphabet and alpha dependent on whether encode is true or false
    if (encode) {
      delta = alpha;
      kappa = alphabet;
    } else {
      delta = alphabet;
      kappa = alpha;
    }

    return (
      omega
        // I originally used .match(/\w|\W/g) but its way less code efficient
        .split("")
        // cycle through omega
        .map((character) => {
          console.log("encoder character is", character);
          // to see if our matched characters match a letter in the (if encoded) alpha array then -
          if (delta.includes(character)) {
            //if they do, we return the index of our (if encoded) alphabet equivalent to the matching alpha index!
            return kappa[delta.indexOf(character)];
          }
          // or if its a space/special character, like add it or whatever man.
          else return character;
        })
        //returns and connects it as a string
        .join("")
    );
  }
  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
