angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope) {})

.controller('PlayerCtrl', function($scope, $rootScope) {

  $scope.platform = ionic.Platform.platform();

  $scope.isPlaying = false;
  $scope.audio = new Audio();
  $scope.audio.src = 'http://www.noiseaddicts.com/samples_1w72b820/3732.mp3';
  $scope.audio.preload = true;

  $scope.audio.addEventListener('ended', function(){ $rootScope.$broadcast('audio.ended', this); });
  
  $scope.$on('audio.ended', function(data) {
    console.log(data);
    $scope.isPlaying = false;
    $scope.$apply();
  });

  $scope.play = function() {
    if (!$scope.isPlaying) {
      $scope.audio.play();
      $scope.isPlaying = true;
    }
    else {
      $scope.isPlaying = false;
      $scope.audio.pause();
    }
  }  
});
