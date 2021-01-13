'use strict';
var searchApp = angular.module('search', []);

searchApp.directive('searchApp', function() {
    return {
        templateUrl: '/pds-staging/search-app.html',
        controller: function($scope, searchData, $window) {
            $scope.view = {
                searchData,
                focused: false,
                query: ''
            }

            $scope.keyup = function(event) {
                switch (event.keyCode) {
                    case 27: // Escape key
                        event.target.blur(); break;
                    case 13: // Enter key
                        if($scope.filteredResults.length === 1) {
                            $window.open($scope.filteredResults[0].url, '_self')
                        }
                }
            }

            $scope.inputFocused = function() {
                $scope.view.focused = true;
            }
            $scope.loseFocus = function(event) {
                let container = event.target.closest('.search-container')
                if(!container.contains(event.relatedTarget)) {
                    $scope.view.focused = false;
                }
            }
        }
    }
})