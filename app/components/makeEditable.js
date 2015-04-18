angular.module('editableApp', [])
    .directive('makeEditable', function(){
       return {
           restrict : 'A',
           templateUrl : "make-editable.html",
           transclude : true,
           scope : true
       }
    });
