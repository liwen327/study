/**
 * Created by liwz on 15-11-27.
 */
var app = angular.module('myApp',[]);
app.controller('namesCtrl',function($scope)
{
    $scope.names = [
        {name:"Jani",country:"china"},
        {name:"Mike",country:"America"},
        {name:"liLei",country:"England"},
        {name:"lily",country:"USA"}
    ];
});
