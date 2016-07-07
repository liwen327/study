/**
 * Created by liwz on 15-3-16.
 */
/*
$(function(){
    alert(111);
})*/

require.config({
    baseUrl:'/js',
    paths:{
        js:'./js'
    }
});
require(['math'],function(math)
{
    alert(math.add(1,1));
});
