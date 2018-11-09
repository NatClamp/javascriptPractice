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

module.exports = { totalValues, tallyIntoObject };
