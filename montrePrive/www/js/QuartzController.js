angular.module("QuartzController", [])

  .controller('quartzController', function($scope) {

      $scope.montres="http://www.ablogtowatch.com/wp-content/uploads/2016/05/Rolex-Daytona-116508-yellow-gold-green-watch-12.jpg"
      //on declare le scope slide, qui pourra etre utilisé dans le slider dans la vue home.html
      $scope.montresfond = [
        "http://www.alux.com/wp-content/uploads/2014/03/Audemars-Piguet-Royal-Oak-Date.jpg",
        "http://www.alux.com/wp-content/uploads/2014/03/Audemars-Piguet-Royal-Oak-Date.jpg",
        "http://www.alux.com/wp-content/uploads/2014/03/Audemars-Piguet-Royal-Oak-Date.jpg",
        "http://www.alux.com/wp-content/uploads/2014/03/Audemars-Piguet-Royal-Oak-Date.jpg",
      ];
  })
