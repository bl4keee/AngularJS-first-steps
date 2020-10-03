var app = angular.module('app', []);
app.controller('defaultCtrl', function($scope) {
    $scope.focus = false;
    $scope.blur = false;
});