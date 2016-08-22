// establish what this service will belong to
var app = angular.module('lab17Module');

app.directive('portDirective', function(){
  return {
    restrict: "E",
    template: "<h1>OH HELLO THERE</h1>",
    replace: true;
  };
});
