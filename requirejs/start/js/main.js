/**
 * Created by liwz on 15-3-16.
 */
/*
$(function(){
    alert(111);
})*/

require.config({
    baseUrl:'./js',
    paths:{
        js:'./js',
        jquery:'./js/lib/jquery-1.11.2.min.js'
    }
});
require(['math','jq'],function(math,jq)
{
    alert(math.add(1,1));
    alert(jq(2,2));
});

//alert(123);
