const findKthLargest = (nums = [], k = 1) => {
  // Validate the first argument and ensure it is a non-empty array of numbers.
  if (typeof nums !== "object" || nums.length < 1)
    throw new Error(
      "Invalid nums value, Please enter a non-empty array of numbers.",
    );

  // Validate the second argument and ensure it is a number.
  if (typeof k !== "number")
    throw new Error("Invalid k value, Please enter a valid number.");

  // Let's end the search when the k (second argument)
  // exceeds the length of the nums array (first argument).
  if (k <= 0 || k > nums.length)
    throw new Error("The value of k is out of range for the given nums array.");

  // flag for stopping the loop procedure
  let stop = false;

  // duplicate the nums array value to avoid rewriting the original reference
  let _nums = [...nums];

  // executes the procedure of sorting the highest to lowest value.
  while (!stop) {
    stop = true;
    for (let n = 1; n < _nums.length; n++) {
      const a = _nums[n - 1],
        b = _nums[n];
      if (a < b) {
        stop = false;
        _nums[n - 1] = b;
        _nums[n] = a;
      }
    }
  }

  // returns the target position only
  return _nums[--k];
};

module.exports = {
  findKthLargest,
};
