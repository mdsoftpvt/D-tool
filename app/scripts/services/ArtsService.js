'use strict';

/**
 * @ngdoc function
 * @name ly
 * @description
 * # Contains rest calls for Team API
 */
 
angular.module('app')
.factory('ArtsService', function ($resource,$http) {  
   
    return $resource(
            "",
            {catId:"@catId"},
            {
                getArtCetegory: {
                    method: 'GET',
                    url: 'data/artsCategory.json',
                    responseType: 'json'
                },
                getArts: {
                    method: 'GET',
                    url: 'data/arts.json',
                    responseType: 'json'
                }      
            }
        );
});
