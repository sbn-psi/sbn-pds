var app = angular.module('ShapeModelTable', []);

app.controller('ShapeModels', ['$scope', 'Comets', function($scope, Comets) {
    console.log('loaded...');
    $scope.view = {
        comets: Comets
    };
    console.log($scope.view.comets);
    
}]);

app.directive('datasetRow', function() {
    return {
        templateUrl: 'partials/dataset-row.html',
        scope: {
            test: '='
        },
        controller: function($scope) {
            console.log('dataset row');
            console.log($scope.test);
        }
    }
})