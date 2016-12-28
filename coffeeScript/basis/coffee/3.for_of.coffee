yearsold = max:10,ida:9,tim:11

ages = for child,age of yearsold
  console.log "#{child} is #{age}"

# for of 可以用来取出对象中的属性和值  可以去控制台查看结果

#如果你希望仅迭代在当前对象中定义的属性，通过hasOwnProperty检查并避免属性是继承来的，可以这样来写： for own key,value of object ，如下：

ages = for child,age of yearsold
  console.log "#{child} is #{age}"

