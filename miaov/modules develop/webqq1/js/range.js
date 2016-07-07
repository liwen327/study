/**
 * Created by liwz on 15-10-19.
 */
/*
define(function(require,exports,module)
{
    function range(val,max,min)
    {
        if(val > max)
        {
            return max;
        }
        else if(val < min)
        {
            return min;
        }
        else
        {
            return val;
        }
    }

    exports.range = range;
})*/
define(function(require,exports,module){

    function range(val , max , min){

        if( val > max ){
            return max;
        }
        else if( val < min ){
            return min;
        }
        else{
            return val;
        }

    }

    exports.range = range;

});