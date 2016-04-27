/**
 * Created by NguyenQuangSang on 26/04/2016.
 */


var app = angular.module('myCV', []);
app.controller('Controller', function($scope, $http) {
    $http.get("profile.json")
        .then(function(response) {
            $scope.myData = response.data.profile;
        });
});
