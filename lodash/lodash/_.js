const _ = {
  
    clamp(number, lower, upper) {
      lowerClampValue =  Math.max(number, lower);
      clampedValue =  Math.min(lowerClampValue, upper);
      return clampedValue;
    },
  
    inRange(number, start, end) {
      if (end === undefined) {
        end = start;
        start = 0;
      }
      if (start > end) {
        let tempEnd = end;
        end = start;
        start = temporaryEnd;
      }
      let isInRange;
      if (number >= start && number < end) {
        isInRange = true;
      } else {
        isInRange = false;
      }
      return isInRange;
    },
  
    words(string) {
      const words = string.split(' ');
      return words;
    },
  
    pad(string, length) {
      if (length <= string.length) {
        return string;
      }
      const startPaddingLength = Math.floor((length - string.length)/2);
      const endPaddingLength = (length - string.length) - startPaddingLength;
      const paddedString = ' '.repeat(startPaddingLength) + string + ' '.repeat(endPaddingLength);
      return paddedString;
    },
  
    has (object, key) {
      const hasValue = object[key];
      if (hasValue != undefined) {
        return true;
      }
      return false;
    },
  
    invert(object) {
      const invertedObject = {};
    Object.keys(object).forEach(key => {
      invertedObject[object[key]] = key;
    });
    return invertedObject;
    },
    
    findKey(object, predicate) {
      for (let key in object) {
        let value = object[key];
        let predicateReturnValue = predicate(value);
        if (predicateReturnValue) {
          return key;
        }
      }
      return undefined;
    },
    
    drop(array, n=1) {
      let droppedArray = array.slice(n, array.length);
      return droppedArray;
    },
  
    dropWhile(array, predicate) {
      const dropNumber = array.findIndex((element, index) => {
        return !predicate(element, index, array);
      })
      let droppedArray = this.drop(array, dropNumber);
      return droppedArray;
    },
  
    chunk(array, size = 1) {
      const arrayChunks = [];
      for (let i = 0; i < array.length; i += size) {
        let arrayChunk = array.slice(i, i+size);
        arrayChunks.push(arrayChunk);
      }
      return arrayChunks;
    }
  
  };




// Do not write or modify code below this line.
module.exports = _;