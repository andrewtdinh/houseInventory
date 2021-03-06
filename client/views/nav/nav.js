'use strict';

angular.module('inventory')
.controller('NavCtrl', function($rootScope, $scope, $state, User){

  $scope.afAuth.$onAuth(function(data){
    if(data){
      $rootScope.activeUser = data;
    }else{
      $rootScope.activeUser = null;
    }

    $state.go('inventory');
  });

  $scope.logout = function(){
    User.logout();
  };
});
