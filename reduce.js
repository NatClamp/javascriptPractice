// Practicing doing lots of different things with reduce!

// This function totals up values in an array. Pretty standard.
function totalValues(nums) {
  return nums.reduce((acc, num) => acc + num, 0);
}

module.exports = { totalValues };
