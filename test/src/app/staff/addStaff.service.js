(function() {
    'use strict';

    angular
        .module('test')
        .service('addStaffService', addStaffService);

    /** @ngInject */
    function addStaffService() {
     
        this.staff = [];
       
        // this.setStaff = function() {
        //     that.staff = [];
        // };
    }
})();