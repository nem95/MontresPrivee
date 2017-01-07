angular.module("ManuelleController", [])

    .controller('manuelleController', function($scope, $http) {

        //on declare le scope slide, qui pourra etre utilisé dans le slider dans la vue home.html
        $scope.cover="http://www.clairediterzi.fr/wp-content/uploads/2015/12/montre-automatique.jpg";
            //on declare le scope slide, qui pourra etre utilisé dans le slider dans la vue home.html
        /*$scope.montre = [
          {
           img: "http://www.watchblog.fr/wp-content/uploads/2015/12/feat.jpg",
           id: 0
          },
          {
           img : "http://images.complication.co/complication-images/base_1426767111823.jpg",
           id : 1
          },
          {
           img :  "http://images.complication.co/complication-images/base_1426767079823.jpg",
           id : 2
          },
          {
           img : "http://www.montrezine.com/wp-content/uploads/2013/12/Breitling-Chronospace-Automatic.jpg",
           id : 3
         },
        ];*/


        $http({
          method: 'GET',
          url: 'http://localhost:8888/BAP-MontrePrivee/MontresPrivee/API/manu.php'
        }).then(function successCallback(response) {
          console.log(response.data);
          $scope.montre = response.data;


        }, function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          console.log(response);
        });

    })

    .controller('manuController', function($scope, $stateParams, $http) {

        $scope.cover="http://www.ablogtowatch.com/wp-content/uploads/2016/05/Rolex-Daytona-116508-yellow-gold-green-watch-12.jpg"
        //on declare le scope slide, qui pourra etre utilisé dans le slider dans la vue home.html

        var id = $stateParams.id; // Reading productid from URL

        $http({
            method: 'GET',
            url: 'http://localhost:8888/BAP-MontrePrivee/MontresPrivee/API/manu.php'
        }).then(function successCallback(response) {
            console.log(response.data);
            let montres = response.data;
            console.log(id);

            for (const montre of montres){
                if (montre.id == id) {
                    $scope.montre = montre;
                    console.log($scope.montre);

                }
            }


        }, function errorCallback(response) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
            console.log(response);
        });


        //$scope.cover = $scope.montresfond[id].img1

      })