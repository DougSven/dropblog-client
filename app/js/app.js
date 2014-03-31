'use strict';


// Declare app level module which depends on filters, and services
angular.module('dropblog', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'dropblog.controllers',
  'restangular'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/posts', {templateUrl: 'partials/post.html', controller: 'PostListCtrl'});
  $routeProvider.when('/admin', {templateUrl: 'partials/admin.html', controller: 'PostCtrl'});
  $routeProvider.when('/posts/:postId', {templateUrl: 'partials/admin.html', controller: 'PostCtrl'});
  
  $routeProvider.otherwise({redirectTo: '/posts'});

}]).
config(['RestangularProvider', function(RestangularProvider) {

  RestangularProvider.setBaseUrl('http://localhost:8080');
  RestangularProvider.setDefaultHttpFields({
    withCredentials: true,
        useXDomain : true
      });
  var encoded = window.btoa('admin:password');
  RestangularProvider.setDefaultHeaders({'Authorization': 'Basic ' + encoded, 'Content-Type': 'application/json' });

}]).
config(['$httpProvider', function($httpProvider) {
        //This may not be needed for CORS. Test without.
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
}]);
