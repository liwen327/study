// Generated by CoffeeScript 1.11.1
(function() {
  var awardMedals, contenders, gold, rest, silver,
    slice = [].slice;

  gold = silver = rest = "unkown";

  awardMedals = function() {
    var first, others, second;
    first = arguments[0], second = arguments[1], others = 3 <= arguments.length ? slice.call(arguments, 2) : [];
    gold = first;
    silver = second;
    return rest = others;
  };

  contenders = ["Mike", "liu Xiang", "yaoMing", "LiLei", "Jhon", "lily"];

  awardMedals.apply(null, contenders);

  alert("Gold:" + gold);

  alert("silver:" + silver);

  alert("The Field:" + rest);

}).call(this);

//# sourceMappingURL=1.splats.js.map