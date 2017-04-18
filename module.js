var app = angular.module('artPage', ['ngRoute']);

app.config(function($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/main.html'
    })
    .when('/images', {
      templateUrl: 'views/images.html'
    })
    .when('/contact', {
      templateUrl: 'views/contact.html'
    })
    .when('/about', {
      templateUrl: 'views/about.html'
    })
    .otherwise({redirectTo:'/'});

$locationProvider.hashPrefix("");

});
