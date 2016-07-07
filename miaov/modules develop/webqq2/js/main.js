define('./main.js',['./drag.js','./popup.js'],function(require,exports,module)
{
    var oBtn = document.getElementById("btn");
    var popup = document.getElementById("popup");
    var popup_b = document.getElementById("popup_b");
    var drag = document.getElementById("drag");

    require('./drag.js').drag(drag);
    oBtn.onclick = function()
    {
        popup.style.display = 'block';
        require('./popup.js').popup(popup,popup_b);
    }
})

define('./drag.js',['./range.js'],function(require,exports,module)
{
    function drag(obj)
    {
        var disX = 0;
        var disY = 0;
        obj.onmousedown = function(ev)
        {
            var ev = ev || event;
            disX = ev.clientX - obj.offsetLeft;
            disY = ev.clientY - obj.offsetTop;
            document.onmousemove = function(ev)
            {
                var ev = ev || event;
                var L = ev.clientX - disX;
                var T = ev.clientY - disY;
                L = require('./range.js').range(L,document.documentElement.clientWidth - obj.offsetWidth,0);
                T = require('./range.js').range(T,document.documentElement.clientHeight - obj.offsetHeight,0);
                obj.style.left = L + "px";
                obj.style.top = T + "px";
            }
            document.onmouseup = function()
            {
                document.onmousemove = null;
                document.onmouseup = null;
            }
            return false;
        }
    }
    exports.drag = drag;
})

define('./popup.js',['./range.js'],function(require,exports,module)
{
    function popup(obj1,obj2)
    {
        var downX = 0;
        var downY = 0;
        var downW = 0;
        var downH = 0;
        obj2.onmousedown = function(ev)
        {
            var ev = ev || event;
            downX = ev.clientX;
            downY = ev.clientY;
            downW = obj1.offsetWidth;
            downH = obj1.offsetHeight;
            document.onmousemove = function(ev)
            {
                var ev = ev || event;
                var W = ev.clientX - downX + downW;
                var H = ev.clientY - downY + downH;
                W = require('./range.js').range(W,500,100);
                H = require('./range.js').range(H,500,100);
                obj1.style.width = W + "px";
                obj1.style.height = H + "px";
            }
            document.onmouseup = function()
            {
                document.onmousemove = null;
                document.onmouseup = null;
            }
            return false;
        }
    }

    exports.popup = popup;
})

define('./range.js',[],function(require,exports,module){

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