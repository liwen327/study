// Generated by CoffeeScript 1.11.1
(function() {
  var age, ages, child, yearsold;

  yearsold = {
    max: 10,
    ida: 9,
    tim: 11
  };

  ages = (function() {
    var results;
    results = [];
    for (child in yearsold) {
      age = yearsold[child];
      results.push(console.log(child + " is " + age));
    }
    return results;
  })();

  ages = (function() {
    var results;
    results = [];
    for (child in yearsold) {
      age = yearsold[child];
      results.push(console.log(child + " is " + age));
    }
    return results;
  })();

}).call(this);

//# sourceMappingURL=3.for_of.js.map
