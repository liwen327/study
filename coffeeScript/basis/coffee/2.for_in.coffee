
eat = (food) ->
  console.log food;
  return no;

menu = (num,dish) ->
  console.log num,dish
  return no;

#吃午饭
eat food for food in ['toast','cheese','wine']

#精致的五道菜
courses = ['greens','caviar','truffles','roast','cake']
menu i + 1,dish for dish,i in courses

#注重健康的一餐
foods = ['broccoli','spinach','chocolate']
eat food for food in foods when food isnt 'chocolate'




#循环和推导式
countdown = (num for num in [10..1])
console.log countdown
#注意：上面的例子中我们展示了如何将推导式赋值给变量，coffeeScript总是将每个循环项收集到一个数组中。但是有时候以循环结尾的函数运行的目的就是它们的副作用（side-effects）。这种情况下要注意不要意外的返回推导式的结果，而是函数的结尾增加一些有意义的返回值 ——例如true或null

