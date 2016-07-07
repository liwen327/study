
function ajax(url,succFn,failedFn)
{
    //1、创建对象
    if(window.XMLHttpRequest)
    {
        var oAjax = new XMLHttpRequest();
    }
    else
    {
        var oAjax = new ActiveXObject("Microsoft.XMLHTTP");      //ie6只识别ActiveXObject("Microsoft.XMLHTTP")
    }

    //2、建立连接
    //open(方法，文件名（url），同步或异步)
    oAjax.open('GET',url,true);
    //3、发送请求
    oAjax.send();
    //4、接收并返回数据
    oAjax.onreadystatechange = function()
    {
        if(oAjax.readyState == 4)
        {
            if(oAjax.status == 200)
            {
                //alert(oAjax.responseText);
                succFn(oAjax.responseText);
            }
            else
            {
                //alert("错误："+oAjax.status);
                failedFn("错误："+oAjax.status);
            }
        }
    }
}