'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope',function($scope) {
        $scope.title = 'Click me to expand';
        $scope.text = 'Hi there folks, I am the content';

}])


.directive('expander', function(){
  return {
    restrict: 'EA',
    replace: true,
    transclude: true,
    scope: { title:'=expanderTitle' },
    template: '<div>' +
                '<div class="title" ng-click="toggle()">{{title}}</div>' +
                '<div class="body" ng-show="showMe" ng-transclude></div>' +
              '</div>',
    link: function(scope, element, attrs) {
      scope.showMe = false;
      scope.toggle = function toggle() {
                      scope.showMe = !scope.showMe;
                      }
    }
} });