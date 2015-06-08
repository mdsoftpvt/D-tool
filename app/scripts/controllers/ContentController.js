'use strict';

/**
 * @ngdoc function
 * @name testApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the testApp
 */
angular.module('app')
  .controller('ContentController', function ($scope, $timeout) {

  	$timeout(function(){App.create();}, 500);
     

  });
