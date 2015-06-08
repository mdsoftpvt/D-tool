'use strict';

/**
 * @ngdoc overview
 * @name testApp
 * @description
 * # testApp
 *
 * Main module of the application.
 */
angular
  .module('app', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router', 
    'isteven-multi-select'
  ])
  .config(function($stateProvider, $urlRouterProvider){
 
    $urlRouterProvider.otherwise('/login');
 
    $stateProvider
    .state('login',{
        url: '/login',   
        views: { 
            'content': {
                templateUrl: 'views/login.html' 
            }   
        }                 
    })
    .state('app',{
        url: '/home/',
        views: {
            'header': {
                templateUrl: 'views/header.html'
            },
            'left': {
                templateUrl: 'views/leftNevigation.html',
                controller: 'leftNevigationController'
            },
            'content': {
                templateUrl: 'views/content.html',
                controller: 'ContentController'
            },
            'footer': {
                templateUrl: 'views/footer.html'
            }
        }
    })
 
    .state('app.dashboard', {
        url: 'dashboard',
        views: {
            'content@': {
                templateUrl: 'views/dashboard.html',
                controller: 'DashboardController'
            }
        }
 
    })
 
    .state('app.campaigns', {
        url: 'campaigns',
        views: {
            'content@': {
                templateUrl: 'views/campaigns.html',
                controller: 'CampaignController'
            }
        }
 
    })
 
    .state('app.subscribers', {
        url: 'subscribers',
        views: {
            'content@': {
                templateUrl: 'views/subscribers.html',
                controller: 'SubscriberController'      
            }
        }
 
    })
    .state('app.subscribers.detail', {
        url: '/:id',
        /*
        templateUrl: 'templates/partials/subscriber-detail.html',
        controller: 'SubscriberDetailController'
        */
 
        views: {
            'detail@app.subscribers': {
                templateUrl: 'views/subscriber-detail.html',
                controller: 'SubscriberDetailController'        
            }
        }
 
    });
 
});