/**
 * Created by liwz on 15-8-6.
 */
function getStyle(obj,name)
{
    if(obj.currentStyle)
    {
        return obj.currentStyle[name];
    }
    else
    {
        return getComputedStyle(obj,false)[name];
    }
}
function startMove(obj,item,iTarget)
{
    clearInterval(obj.timer);
    obj.timer = setInterval(function(){
        var cur;   //初始化(var cur =0;)或直接声明一个变量（var cur=0;）都可以
        if(item == "opacity")
        {
            cur = Math.round(parseFloat(getStyle(obj,item))*100);   //在这里又可以获取到行内或样式中定义的样式（cur又可以获取到值连带着上面声明时的cur也就有值了）
        }
        else
        {
            cur = parseInt(getStyle(obj,item));
        }
        var speed = (iTarget - cur)/5;      //当cur=30.0000234时，speed=-1,这时一直在运动着，之后又获取到cur等于29.0000234,执行到此处时，speed=1了，所以speed会在-1和1之间循环，永远不会停
        speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);

        if(cur == iTarget )
        {
            clearInterval(obj.timer);
        }
        else
        {
            if(item == "opacity")
            {
                //cur +=speed;
                obj.style.filter = "alpha(opacity:" + (cur + speed) + ")";
                obj.style.opacity = (cur + speed)/100;
                //console.log(cur + speed);
            }
            else
            {
                obj.style[item] = cur + speed + "px";
            }
        }
    },30)

}
