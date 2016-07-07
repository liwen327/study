/**
 * Created by liwz on 15-10-19.
 */
define(function(require,exports)
{
    var aA = document.getElementsByTagName("a");
    var aDiv = document.getElementsByTagName("div");

    window.bBtn = true;
    window.onhashchange = function()
    {
        if(window.bBtn)
        {
            window.location.reload();   //开关控制，当bBtn为true时才刷新页面
        }
    }

    require('show.js').show(aA,aDiv);
    require('hide.js').hide(aA,aDiv);
});
