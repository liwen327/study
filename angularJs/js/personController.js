/**
 * Created by liwz on 15-11-27.
 */
var app = angular.module('myApp',[]);
app.controller('personCtrl',function($scope)
{
    $scope.firstName = "John";
    $scope.lastName = "Doe";
    $scope.fullName = function()
    {
        return $scope.firstName + " " + $scope.lastName;
    }
})
