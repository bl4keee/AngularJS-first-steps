var app = angular.module('app', []);
app.controller('defaultCtrl', function($scope) {

  $scope.sorting = "-metres";

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
  });
