const hof = {};

hof.identity = function(value) {
  return value;
};

//  hof.identity = (value) => value;

hof.identityf = function(value) {
  return function() {
    return value;
  };
};

// hof.identityf = value => () => value;

hof.add = function(x, y) {
  return x + y;
};

hof.sub = function(x, y) {
  return x - y;
};

hof.mul = function(x, y) {
  return x * y;
};

hof.addf = function(x) {
  return function(y) {
    return hof.add(x, y);
  };
};

hof.liftf = function(func) {
  return function(x) {
    return function(y) {
      return func(x, y);
    };
  };
};

hof.curry = function(func, arg1) {
  return function(arg2) {
    return func(arg1, arg2);
  };
};

hof.inc = function(num) {
  return hof.add(num, 1);
};

hof.twice = function(func) {
  return function(x) {
    return func(x, x);
  };
};

hof.composeu = function(func1, func2) {
  return function(x) {
    let y = func1(x);
    return func2(y);
  };
};

hof.composeb = function(func1, func2) {
  return function(x, y, z) {
    let result = func1(x, y);
    return func2(result, z);
  };
};

hof.limit = function(func, num) {
  let counter = 0;
  return function(x, y) {
    ++counter;
    if (counter <= num) {
      return func(x, y);
    }
  };
};

hof.from = function(x) {
  let counter = x;
  return function() {
    return counter++;
  };
};

hof.to = function(func, val) {
  let result = 0;
  return function(x) {
    result = func(x);
    if (result < val) return result;
  };
};

hof.fromTo = function(x, y) {
  let counter = x;
  return function() {
    if (counter < y) return counter++;
  };
};

hof.element = function(arr, func) {
  let count = 0;
  return function() {
    let curr = func ? func() : count++;
    for (let i = 0; i < arr.length; i++) {
      if (i === curr) return arr[i];
    }
  };
};

hof.collect = function(func, array) {
  return function() {
    let curr = func();
    if (curr !== undefined) array.push(curr);
    return curr;
  };
};

hof.filter = function(func, predicate) {
  return function() {
    let curr = func();
    if (predicate(curr) === true) return curr;
  };
};

hof.concat = function() {};

hof.gensymf = function() {};

hof.gensymff = function() {};

hof.counter = function() {};

hof.revokable = function() {};

module.exports = hof;
