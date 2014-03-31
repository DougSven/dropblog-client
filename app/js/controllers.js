'use strict';

/* Controllers */

angular.module('dropblog.controllers', [])
  .controller('PostListCtrl', function($scope, Restangular) {
  	
  	Restangular.all('posts').getList().then(function (posts) {
		_.sortBy(posts, 'createDate');
		posts.reverse();
		$scope.posts = posts;
		$scope.post = _.first(posts);
	});

	$scope.focus = function(id) {
      $scope.post = _.find($scope.posts, { 'id': id});
    };
  })
  .controller('PostCtrl', ['$scope', '$routeParams', 'Restangular', function($scope, $routeParams, Restangular) {
  	
 	$scope.refresh = function() {
  		Restangular.all('posts').getList().then(function (posts) {
			_.sortBy(posts, 'createDate');
			posts.reverse();
			$scope.posts = posts;
			$scope.post = {};
		});
	};

	$scope.edit = function(id) {
  		 $scope.post = _.find($scope.posts, { 'id': id});
  	};

  	$scope.delete = function(id) {
  		//TODO handle errors
  		if(id) {
  			Restangular.one('posts', id).remove();
  			$scope.refresh();
  			//TODO get edit list to redraw
  		}else {
  			$scope.new();
  		}
  		
  	};

    $scope.update = function(post) {
      var now = new Date();
      post.updateDate = now;
      
      //PUT if post has id otherwise POST
      if(post.id){
      	post.put();
      }else{
      	post.createDate = now;
      	Restangular.all('posts').post(post).then(function() {
		    console.log("Object saved OK");
		  }, function() {
		    console.log("There was an error saving");
		});
      	$scope.refresh();
      	//TODO get edit list to redraw
      }

    };
 
    $scope.new = function() {
      $scope.post = {};
    };

    $scope.refresh();

  }])
  .controller('NavCtrl', function ($scope, $location) { 
	$scope.isActive = function (viewLocation) { 
	    return viewLocation === $location.path();
	};
  })
;
