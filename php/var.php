<?php
    function myTest()
    {
        static $x = 0;
        echo $x;
        $x++;
    }
    myTest();
    myTest();
    myTest();

    echo "<br/>";

    $cars = array("Volvo","BMW","SAAB");
    var_dump($cars);

    echo "<br/>";
    class Car
    {
        var $color;
        function Car($color = "green"){
            $this -> color = $color;
        }
        function what_color(){
            return $this->color;
        }
    }

    function print_vars($obj){
        foreach(get_object_vars($obj) as $prop => $val){
            echo "\t$prop = $val\n";
        }
    }
    //instantiate one object
    $herbie = new Car("white");
    $herbie = new Car("red");

    //show herbie properties
    echo "\\herbie:Properties\n";
    print_vars($herbie);

    echo "<br/>";

    $x = "Hello world!";
    $x = null;
    var_dump($x);

    echo "<br/>";

    $x = array("a" => "red", "b" => "green");
    $y = array("c" => "blue", "d" => "yellow");
    $z = $x + $y; // $x 与 $y 的联合
    var_dump($z);
    echo "<br/>";
    var_dump($x == $y);
    var_dump($x === $y);
    var_dump($x != $y);
    var_dump($x <> $y);
    var_dump($x !== $y);

    echo "<br/>";

    $colors = array("red","green","blue");
    foreach($colors as $value){
        echo "$value <br>";
    }

    echo "<br/>";

    $age = array("Bill" => "35","Steve"=> "36","Peter"=> "43");
    foreach($age as $x => $x_value){
        echo "Key=" . $x . ",Value =" . $x_value;
        echo "<br>";
    }

?>