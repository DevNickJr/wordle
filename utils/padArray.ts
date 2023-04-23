function padArray(arr: Array<string>, length = 6, filler = "") {
    const result = arr.slice(0, length); // take the first six elements of the array
    while (result.length < length) {     // add zeros until the array has six elements
      result.push(filler);
    }
    return result;
  }

  export default padArray