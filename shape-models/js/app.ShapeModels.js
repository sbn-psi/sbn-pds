var app = angular.module('ShapeModelTable', []);

app.controller('ShapeModels', ['$scope', 'Comets', 'Asteroids', 'Satellites', 'arDetector', function($scope, Comets, Asteroids, Satellites, arDetector) {
    $scope.view = {
        comets: Comets,
        asteroids: Asteroids,
        satellites: Satellites,
        webAr: arDetector.isWebAr,
        isRelAR: arDetector.isRelAR
    };
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
                altText: fileFormat => `Download ${fileFormat} file.`
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
})
.directive('generatePreview', function() {
    return {
        scope: {
            dataset: '='
        },
        transclude: true,
        controller: function($scope, arDetector) {
            $scope.preview = {
                isRelAR: arDetector.isRelAR,

                getPreviewType: dataset => {
                    const isRelAR = $scope.preview.isRelAR;
                    // let src = null,
                    let type = null;
                    // if iOS AR Kit is enabled,
                    if (isRelAR) {
                        // if USDZ preview exists
                        if (dataset.files.previews.ios != null) {
                            // display USDZ preview
                            // src = dataset.files.previews.ios.path;
                            type = 'ios';
                        }
                    // else if default PNG preview exists,
                    } else if (dataset.files.previews.default != null) {
                        // display default PNG preview
                        // src = dataset.files.previews.default.path;
                        type = 'default';
                    }
                    // else display no preview
                    return type;
                }
            };
        },
        link: function(scope,elm,attrs,ctrl) {
            let type = scope.preview.getPreviewType(scope.dataset);
            let src, newElement;
            if (type == 'default') {
                src = scope.dataset.files.previews.default.path;
                newElement = angular.element(`<img class="preview" src="${src}" alt="Preview" title="Preview">`);    
            } else if (type == 'ios') {
                src = scope.dataset.files.previews.default.path;
                srcAr = scope.dataset.files.previews.ios.path;
                newElement = angular.element(`<a href="${srcAr}" rel="ar"><img class="preview" src="${src}"></a>`);
            }
            elm.append(newElement);
        }
    }
})