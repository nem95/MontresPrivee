angular.module("ProfilController", [])

  .controller('profilController', function($scope, $stateParams) {

     
      $scope.montresfond = [
        { 
          img :  "http://www.alux.com/wp-content/uploads/2014/03/Audemars-Piguet-Royal-Oak-Date.jpg",
          id : 0
        },
        { 
          img :  "http://www.hublot.com/templates/joostrap-hublot-v2/images/craftsmanship/materials/hublot-material-rubber.jpg",
          id : 1
        },{ 
          img :  "http://www.bucherer.com/sites/default/files/styles/img_style_2560/public/watches/hero/AudermarsPiguet_Header.jpg?itok=p6zC0RhL&timestamp=1407433874",
          id : 2
        },{ 
          img :  "http://www.montres-de-luxe.com/photo/art/default/673883-823245.jpg?v=1289479443",
          id : 3
        },
    
      ];

     $scope.nymane = "bruhh";
      
  })




