var app = angular.module('ShapeModelTable', []);

app.controller('ShapeModels', ['$scope', 'Comets', 'Asteroids', 'Satellites', function($scope, Comets, Asteroids, Satellites) {
    $scope.view = {
        comets: Comets,
        asteroids: Asteroids,
        satellites: Satellites,
        webAr: false,
        isRelAR: false
    };
    console.log($scope.view.comets);
    (function () {
        var a = document.createElement('a');
        if (a.relList.supports('ar')) {
            $scope.view.isRelAR = true;
        }
        document.documentElement.classList.add($scope.view.isRelAR ? 'relar' : 'no-relar');
    })();
}]);

app.directive('fileDownload', function() {
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
                        case 'ICQ':
                            return 'img/default_download.svg';
                        default:
                            console.log($scope.file);
                            console.error('This was unexpected.');
                            return 'img/default_download.svg';
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
                        case 'ICQ':
                            return 'Download .icq file';
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
            const ferretUrl = `https://sbnapps.psi.edu/ferret/SimpleSearch/results.action?targetName=`;
            $scope.view = {
                link: ferretUrl + $scope.name.replace(/ /g,'%20')
            };
        }
    }
});