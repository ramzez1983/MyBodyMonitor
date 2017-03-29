'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:SignupCtrl
 * @description
 * # SignupCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp')
   .controller('SignupCtrl', function ($scope, $http, $log) {
     $scope.signup = function() {
       var payload = {
         email : $scope.email,
         password : $scope.password
       };
       $log.debug(payload);
       $http.post('app/signup', payload, function(data) {
             $log.debug(data);
           });
     };
   });
