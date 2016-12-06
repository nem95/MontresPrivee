angular.module("AutomatiqueController", [])

  .controller('automatiqueController', function($scope) {

      //on declare le scope slide, qui pourra etre utilisé dans le slider dans la vue home.html
      $scope.cover="http://www.clairediterzi.fr/wp-content/uploads/2015/12/montre-automatique.jpg";
            //on declare le scope slide, qui pourra etre utilisé dans le slider dans la vue home.html
      $scope.montre = [
        "http://www.watchblog.fr/wp-content/uploads/2015/12/feat.jpg",
        "http://images.complication.co/complication-images/base_1426767111823.jpg",
        "http://images.complication.co/complication-images/base_1426767079823.jpg",
        "http://www.montrezine.com/wp-content/uploads/2013/12/Breitling-Chronospace-Automatic.jpg",
      ];
  })

