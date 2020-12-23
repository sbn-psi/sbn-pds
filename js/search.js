// 'use strict';
var searchApp = angular.module('search', []);

searchApp.directive('searchApp', function() {
    return {
        templateUrl: '/pds-staging/search-app.html',
        controller: function($scope, searchData) {
            $scope.view = {
                searchData,
                focused: false,
                query: ''
            }
        }
    }
})