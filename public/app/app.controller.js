angular.module('myApp').controller('AppCtrl', function($scope) {
 $scope.message = '';  
 $scope.click = (function(_this) {
   return function(data) {
     $.post( "/get", { data: data }, function(date){});
   };
 })(this);
});