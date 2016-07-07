/**
 * Created by liwz on 15-10-19.
 */
define(function(require,exports,module)
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

