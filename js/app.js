'use strict'

angular.module("miapp", ["ui.router"]).config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/inicio");
  //
  // Now set up the states
  $stateProvider
    .state('inicio', {
      url: "/inicio",
      templateUrl: "views/inicio.html"
    })
    .state('otro1', {
      url: "/otro1",
      templateUrl: "views/otro1.html"
    })
    .state('otro2', {
      url: "/otro2",
      templateUrl: "views/otro2.html"
    })
    .state('otro3', {
      url: "/otro3",
      templateUrl: "views/otro3.html"
    })
    ;
    
});