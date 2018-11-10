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

hof.twice = function() {};

hof.composeu = function() {};

hof.composeb = function() {};

hof.limit = function() {};

hof.from = function() {};

hof.to = function() {};

hof.fromTo = function() {};

hof.element = function() {};

hof.collect = function() {};

hof.filter = function() {};

hof.concat = function() {};

hof.gensymf = function() {};

hof.gensymff = function() {};

hof.counter = function() {};

hof.revokable = function() {};

module.exports = hof;
