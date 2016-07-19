<?php
$callback = isset($_GET['callback']) ? trim($_GET['callback']) : ''; //jsonp回调参数，必需
$date = array("age"=>$_GET['age'], "message"=>$_GET['age']);
$date["msg"]="err";
$date["info"]="因人品问题，发送失败";
$tmp= json_encode($date); //json 数据
echo $callback . '(' . $tmp .')';  //返回格式，必需
?>