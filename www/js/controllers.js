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
})
.controller('ProfileCtrl', function($scope, $rootScope) {

  
})
.controller('BandProfileCtrl', function($scope, $rootScope) {

  $scope.range = function(min, max, step) {
    step = step || 1;
    var input = [];
    for (var i = min; i <= max; i += step) {
        input.push(i);
    }
    return input;
  };



  $scope.musics = [
    {
      name: 'Go To Hell For Heaven\'s Sake',
      duration: '05:23'
    },
    {
      name: 'True Friends',
      duration: '03:54'
    },
    {
      name: 'House of Wolves',
      duration: '06:10'
    },
    {
      name: 'And the Snakes Starts to Sing',
      duration: '04:14'
    },
    {
      name: 'Throne',
      duration: '06:22'
    },
    {
      name: 'Avalanche',
      duration: '04:25'
    },
    {
      name: 'Follow You',
      duration: '04:53'
    },
  ]

});

