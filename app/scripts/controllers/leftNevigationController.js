'use strict';

/**
 * @ngdoc function
 * @name testApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the testApp
 */
angular.module('app')
  .controller('leftNevigationController', function ($scope,$modal) {
    
    $scope.modernBrowsers = [
 	{	 	name: "Opera",	maker: "Opera Software",	ticked: false	},
 	{	 	name: "Internet Explorer",	maker: "Microsoft",	ticked: false	},
 	{	 	name: "Firefox",	maker: "Mozilla Foundation",	ticked: true	},
 	{	 	name: "Safari",	maker: "Apple",	ticked: false	}, 	
 	{	 	name: "Chrome",	maker: "Google",	ticked: false	}
	];

	$scope.outputBrowsers = [
	 	{	icon: "[...]/firefox-icon.png...",	name: "Firefox",	maker: "Mozilla Foundation",	ticked: true	}
	];

	$scope.open = function (size) {
		App.instance = App.create();
		App.instance.deSelect(); 
			
	    var modalInstance = $modal.open({
	      animation: true,
	      templateUrl: 'views/artsBrowes.html',
	      controller: 'ArtController',
	      size: "lg",
	      resolve: {
	        items: function () {
	          //return $scope.items;
	        }
	      }
    	});
	}

  });
