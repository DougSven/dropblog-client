'use strict';

/* jasmine specs for controllers go here */

describe('Dropblog controllers', function(){
  beforeEach(module('dropblog'));

  describe('PostListCtrl', function(){
    var scope, ctrl;

    beforeEach(inject(function($rootScope, $controller) {
      scope = $rootScope.$new();
      ctrl = $controller('PostListCtrl', {$scope: scope});
    }));

    it('should create "posts" model with 2 posts', inject(function() {
      //spec body
      expect(scope.posts.length).toBe(2);
    }));

    // it('should ....', inject(function($controller) {
    //   //spec body
    //   var myCtrl2 = $controller('MyCtrl2');
    //   expect(myCtrl2).toBeDefined();
    // }));
  });


});
