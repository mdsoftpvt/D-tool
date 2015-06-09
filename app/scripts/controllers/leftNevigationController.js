'use strict';

/**
 * @ngdoc function
 * @name testApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the testApp
 */
angular.module('app')
  .controller('leftNevigationController', function ($scope) {
    
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

	$scope.addArtOnStage = function()
	{
		var tempId = "img" +  Math.random() * 1000
		var myEl = angular.element( document.querySelector( '#dom' ) );
		myEl.prepend ('<img alt="dunny" id="'+tempId+'" src="images/dunny.png" />');   
		App.instance = App.create();
		App.instance.addArt(tempId); 
	}	

  });
