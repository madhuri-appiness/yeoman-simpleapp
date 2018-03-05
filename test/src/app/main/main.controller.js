(function() {
  'use strict';

  angular
    .module('test')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope,$uibModal,addStaffService) {
    $scope.addStaff = addStaffService;
  $scope.candidateForm = function(){
 $uibModal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'app/staff/addStaff.html',
      controller: 'addStaffController',
      backdrop: 'static',
      windowClass: "profile",
      keyboard: false
    
  })
  }



  }
})();
