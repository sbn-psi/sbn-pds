var app = angular.module('ShapeModelTable', []);

app.controller('ShapeModels', ['$scope', 'Comets', function($scope, Comets) {
    console.log('loaded...');
    $scope.view = {
        comets: Comets,
        
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
.directive('fileDownload', function() {
    return {
        templateUrl: 'partials/file-download.html',
        transclude: true,
        scope: {
            file: '=fileToDownload'
        },
        controller: function($scope) {
            $scope.view = {
                downloadIcon: fileFormat => {
                    switch (fileFormat) {
                        case 'WRL':
                            return 'img/WRL.svg';
                        case 'TAB':
                            return 'img/TAB.svg';
                        case 'OBJ':
                            return 'img/OBJ.svg';
                        default:
                            console.log($scope.file);
                            console.error('This was unexpected.');
                            return 'img/default_icon.svg';
                    };
                },
                altText: fileFormat => {
                    switch (fileFormat) {
                        case 'WRL':
                            return 'Download .wrl file';
                        case 'TAB':
                            return 'Download .tab file';
                        case 'OBJ':
                            return 'Download .obj file';
                        default:
                            console.log(fileFormat);
                            console.error('This was unexpected too.');
                            return 'Download file';
                    };
                }
            }
        }
    }
})
.directive('ferretLink', function() {
    return {
        templateUrl: 'partials/ferret-link.html',
        transclude: true,
        scope: {
            name: '=objectName'
        },
        controller: function($scope) {
            console.log($scope.name);
            const ferretUrl = `https://sbnapps.psi.edu/ferret/SimpleSearch/results.action?targetName=`;

            $scope.view = {
                link: ferretUrl + $scope.name.replace(/ /g,'%20')
            };
            console.log($scope.view.link);
            
        }
    }
})