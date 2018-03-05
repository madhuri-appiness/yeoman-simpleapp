(function() {
    'use strict';
  
    angular
      .module('test')
      .controller('addStaffController', addStaffController);

    function addStaffController($scope,$uibModalInstance,addStaffService) {
      $scope.addStaff = addStaffService;
        $scope.miModalCancel = function() {
            $uibModalInstance.dismiss('cancel');
        };
    
        
        $scope.data = [
            { city: 'Bangalore'},
            { city: 'Hubli'},
            { city: 'Dharwad'}]


        $scope.add = function(one,two,three,four,mode){
          var values = {
            "name" : one,
            "profile" : two,
            "city" : three,
            "phone" : four
            
          }
          if(mode == 'ok'){
            $uibModalInstance.dismiss('cancel');
          }
          $scope.addStaff.staff.push(values);
          $scope.input1 = "";
          $scope.input2 = "";
         
          $scope.input3 = "";
        //   // $uibModalInstance.dismiss('cancel');
        }
        


    }
  
  

    
  })();