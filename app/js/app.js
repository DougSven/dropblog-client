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
  $routeProvider.when('/createPost', {templateUrl: 'partials/partial2.html', controller: 'PostCtrl'});
  
  // $routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', controller: 'MyCtrl2'});
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
  // RestangularProvider.setDefaultRequestParams({token: 'Access-Control-Allow-Origin "http://localhost:8080"'});

// Accept:application/json, text/plain, */*
// Accept-Encoding:gzip,deflate,sdch
// Accept-Language:en-US,en;q=0.8
// Cache-Control:no-cache
// Connection:keep-alive
// DNT:1
// Host:localhost:8080
// Origin:http://localhost:8000
// Pragma:no-cache
// Referer:http://localhost:8000/app/index.html
// User-Agent:Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/33.0.1750.152 Safari/537.36

// GET /posts HTTP/1.1
// Host: localhost:8080
// Connection: keep-alive
// Cache-Control: no-cache
// Pragma: no-cache
// Accept: application/json, text/plain, */*
// Origin: http://localhost:8000
// User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/33.0.1750.152 Safari/537.36
// DNT: 1
// Referer: http://localhost:8000/app/index.html
// Accept-Encoding: gzip,deflate,sdch
// Accept-Language: en-US,en;q=0.8

// OPTIONS /posts HTTP/1.1
// Host: localhost:8080
// Connection: keep-alive
// Cache-Control: no-cache
// Pragma: no-cache
// Access-Control-Request-Method: GET
// Origin: http://localhost:8000
// User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/33.0.1750.152 Safari/537.36
// Access-Control-Request-Headers: accept, authorization
// Accept: */*
// DNT: 1
// Referer: http://localhost:8000/app/index.html
// Accept-Encoding: gzip,deflate,sdch
// Accept-Language: en-US,en;q=0.8
}]).
config(['$httpProvider', function($httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
}]);
