function intWithinBounds(n, lower, upper) {
  if (Number.isInteger(n)) {
    const result = n >= lower && n <= upper;
    if (result) {
      console.log(`${n} is within the bounds of ${lower} and ${upper}`);
    } else {
      console.log(`${n} is not within the bounds of ${lower} and ${upper}`);
    }
    return result;
  } else { 
    console.log(`${n} is not an integer.`);
    return false;
  }
}

export default intWithinBounds;
