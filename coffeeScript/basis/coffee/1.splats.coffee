gold = silver = rest = "unkown"

awardMedals = (first,second,others...) ->
  gold = first
  silver = second
  rest = others

contenders = [
  "Mike"
  "liu Xiang"
  "yaoMing"
  "LiLei"
  "Jhon"
  "lily"
]

awardMedals contenders ...

alert "Gold:" + gold
alert "silver:" + silver
alert "The Field:" + rest