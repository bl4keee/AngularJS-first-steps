var app = angular.module('app', []);
app.controller('defaultCtrl', function($scope) {

    $scope.mountainsList = [
        {
          mountain: 'Mount Everest',
          metres: 8850
        },
        {
          mountain: 'K2',
          metres: 8611
        },
        {
          mountain: 'Kangchenjunga',
          metres: 8598
        },
        {
          mountain: 'Lhotse',
          metres: 8501
        },
        {
          mountain: 'Makalu',
          metres: 8463
        },
        {
          mountain: 'Cho Oyu',
          metres: 8201
        }];

    var drive = function(source, target) {
        var t = $scope.mountainsList[target];
        $scope.mountainsList[target] = $scope.mountainsList[source];
        $scope.mountainsList[source] = t;
    };

    $scope.up = function(index) {
        drive(index, index - 1);
    };

    $scope.down = function(index) {
        drive(index, index + 1);
    };

    $scope.saveChanges = function(index, mountain, metres) {
        $scope.mountainsList[index] = {'mountain': mountain,  'metres': metres};
    };
});