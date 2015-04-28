'use strict';

angular.module('inventory')
.controller('InventoryCtrl', function($scope, $state){
  // $scope.name = $state.current.name;

  $scope.addRoom = function(roomName){
    console.info('roomName: ', roomName);
  };
});
