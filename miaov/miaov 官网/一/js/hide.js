/**
 * Created by liwz on 15-10-21.
 */
define(function(require,exports)
{
    function hide(aA,aDiv)
    {
        for(var i=0; i<aA.length; i++)
        {
            aA[i].onclick = function()
            {
                var hash = this.dataset.hash;
                window.bBtn = false;

                switch(window.location.hash.substring(1) || 'index')
                {
                    case 'index':
                        require('indexOut.js').init(aA,aDiv,hash);
                        break;
                    case 'student':
                        require('studentOut.js').init(aA,aDiv,hash);
                        break;
                    case 'message':
                        require('messageOut.js').init(aA,aDiv,hash);
                        break;
                }
            }
        }
    }
    exports.hide = hide;
})
