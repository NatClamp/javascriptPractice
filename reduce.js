// Practicing doing lots of different things with reduce!

// This function totals up values in an array. Pretty standard.
function totalValues(nums) {
  return nums.reduce((acc, num) => acc + num, 0);
}

//This function will tally into an object!
function tallyIntoObject(items) {
  return items.reduce((acc, item) => {
    item in acc ? acc[item]++ : (acc[item] = 1);
    return acc;
  }, {});
}

// This function will flatten an array of nested arrays!
function flattenArray(items) {
  return items.reduce((acc, item) => acc.concat(item), []);
}

// This function will identify unique values
function uniqueValues(items) {
  return items.reduce((acc, item, index, array) => {
    if (array.indexOf(item) === array.lastIndexOf(item)) acc.push(item);
    return acc;
  }, []);
}

// This function removes duplicates from an array
function removeDupes(items) {}

module.exports = { totalValues, tallyIntoObject, flattenArray, uniqueValues };
