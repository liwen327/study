/**
 * Created by liwz on 15-11-27.
 */
var app = angular.module('myApp',[]);
app.controller('customersCtrl',function($scope,$http)
{
    $http.get("./php/customers.php")
            .success(function(response)
            {
                $scope.names = response.records;
            })
});
