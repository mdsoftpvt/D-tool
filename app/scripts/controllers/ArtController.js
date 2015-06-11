'use strict';

/**
 * @ngdoc function
 * @name testApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the testApp
 */
angular.module('app')
  .controller('ArtController', function ($scope, $timeout,$modalInstance,ArtsService) {
  	
  	$scope.artsCategroy = []
  	$scope.artsCollection = []
  	
  	$scope.addArtOnStage = function(art)
	{
		var tempId = "img" +  Math.random() * 1000
		var myEl = angular.element( document.querySelector( '#dom' ) );
		myEl.prepend ('<img alt="'+art.id+'" id="'+art.id+'" src="'+art.img+'"  style="height:auto;width:100px;"/>');   
		App.instance = App.create();
		$timeout(function(){App.instance.addArt(art.id);},500)		
	}	
	
	$scope.ok = function () {
		$modalInstance.close(/*$scope.selected.item*/);
	};

	$scope.cancel = function () {
		$modalInstance.dismiss('cancel');
	};

	$scope.getArts = function(catId)
	{
		$scope.artsCollection = JSON.parse('[	{		"id":201,		"name":"dog1",		"img":"http://doubletreebyhiltonsanjose.com/wp-content/uploads/2014/08/Dog-Pictures.jpg",		"discription":""	},	{		"id":202,		"name":"dog1",		"img":"http://www.mendhammoves.com/articles/rescue_dogs/puppy.png",		"discription":""	},	{		"id":203,		"name":"dog1",		"img":"http://www.blue-9.com/wp-content/uploads/2015/01/dog6.jpg",		"discription":""	},	{		"id":204,		"name":"dog1",		"img":"",		"discription":""	},	{		"id":205,		"name":"dog1",		"img":"http://c.fastcompany.net/multisite_files/fastcompany/poster/2014/01/3025003-poster-p-dog-2.jpg",		"discription":""	},	{		"id":206,		"name":"dog1",		"img":"http://www.metrodogstop.com/cms/wp-content/uploads/2013/05/cute-dog.jpg",		"discription":""	},	{		"id":207,		"name":"dog1",		"img":"http://www.cdc.gov/animalimportation/images/dog2.jpg",		"discription":""	}]');
		// ArtsService.getArts({catId:catId},function(response){
		// 	console.log("response " + response)
		// 	$scope.artsCollection = response;
		// },function(error){
		// 	console.log("error " + error)
		// })
	}
	//
	$scope.getArtCetegory = function(catId)
	{
		$scope.artsCategroy = JSON.parse('[{	"id":101,	"name":"Sports",	"discription":""},{	"id":102,	"name":"Animal",	"discription":""},{	"id":103,	"name":"Buldings",	"discription":""},{	"id":104,	"name":"City",	"discription":""},{	"id":105,	"name":"Country",	"discription":""},{	"id":106,"name":"Mountain",	"discription":""}]');
		$scope.getArts($scope.artsCategroy[0])
		// ArtsService.getArtCetegory(function(response){
		// 	console.log("response " + response)
		// 	$scope.artsCategroy = response;
		// },function(error){
		// 	console.log("error " + error)
		// })
	}
	//
	$scope.ShowArtOfCat = function(cat){
		$scope.getArts(cat.id)
	}
	//
	$scope.getArtCetegory();	
});
