angular.module('freewheeling')
	.controller('RoutesCtrl', ['$scope', '$http', function ($scope, $http) {
	angular.extend($scope, {
		center: {
        lat: 35.843768,
        lng: -78.6450559,
        zoom: 13
      },
      layers: {
            baselayers: {
                xyz: {
                    name: 'OpenStreetMap (XYZ)',
                    url: 'https://{s}.tiles.mapbox.com/v3/ctwhite.g8n5fjjp/{z}/{x}/{y}.png',
                    type: 'xyz'
                },

            }
        },
        geojson: {}
	});



    $http.get("/routes").success(function(data, status) {
        angular.extend($scope, {
            geojson: {
                data: data
                
                }
            });
        });
}]);

