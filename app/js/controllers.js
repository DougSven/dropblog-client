'use strict';

/* Controllers */

angular.module('dropblog.controllers', [])
  .controller('PostListCtrl', function($scope, Restangular) {
  	
  	$scope.posts = Restangular.all('posts').getList().$object;
  	// $scope.posts = _.sortBy($scope.posts, 'createDate');
  	// $scope.posts.reverse();
	//firstAccount.getList("places", {query: param}, {'x-user': 'mgonto'})

  })
  .controller('PostCtrl', function($scope, Restangular) {
  	
  	var posts = Restangular.all('posts');
  	$scope.master = {};
 
    $scope.update = function(post) {
      $scope.master = angular.copy(post);
      post.createDate = new Date();
      post.updateDate = new Date();

      posts.post(post).then(function() {
	    console.log("Object saved OK");
	  }, function() {
	    console.log("There was an error saving");
	  });
    };
 
    $scope.reset = function() {
      $scope.post = angular.copy($scope.master);
    };
 
    $scope.reset();
	//firstAccount.getList("places", {query: param}, {'x-user': 'mgonto'})

  })
  ;
