angular.module("AutomatiqueController", [])

  .controller('automatiqueController', function($scope) {

      //on declare le scope slide, qui pourra etre utilisé dans le slider dans la vue home.html
      $scope.cover="http://www.clairediterzi.fr/wp-content/uploads/2015/12/montre-automatique.jpg";
            //on declare le scope slide, qui pourra etre utilisé dans le slider dans la vue home.html
      $scope.montre = [
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

      ];
  })

.controller('autoController', function($scope, $stateParams) {

      $scope.montres="http://www.ablogtowatch.com/wp-content/uploads/2016/05/Rolex-Daytona-116508-yellow-gold-green-watch-12.jpg"
      //on declare le scope slide, qui pourra etre utilisé dans le slider dans la vue home.html
      $scope.montresfond = [
        { 
          img :  "http://www.alux.com/wp-content/uploads/2014/03/Audemars-Piguet-Royal-Oak-Date.jpg",
          img1 : "http://www.montreapart.fr/contents/media/montre_automatique_de_plongee_professionnel_homme_s_a_r-rescue-timer-_m1-41-03-kb.jpg",
          id : 0
        },
        { 
          img :  "http://www.hublot.com/templates/joostrap-hublot-v2/images/craftsmanship/materials/hublot-material-rubber.jpg",
          img1 : "http://www.montreapart.fr/contents/media/montre_automatique_gmt_de_plongee_professionnel_homme_muehle_marinus_gmt-m1-28-53-kb.jpg",
          id : 1
        },{ 
          img :  "http://www.bucherer.com/sites/default/files/styles/img_style_2560/public/watches/hero/AudermarsPiguet_Header.jpg?itok=p6zC0RhL&timestamp=1407433874",
          img1 : "http://www.montreapart.fr/contents/media/montre_automatique_muehle_petite_seconde_homme_teutonia_ii_kleine_sekunde-m1-33-45-lb.jpg",
          id : 2
        },{ 
          img :  "http://www.montres-de-luxe.com/photo/art/default/673883-823245.jpg?v=1289479443",
          img1 : "http://www.montreapart.fr/contents/media/sinn_917_f_lb.jpg",
          id : 3
        },
    
      ];

      console.log($scope.montresfond);

      var id = $stateParams.id; // Reading productid from URL
      console.log(id);
      $scope.cover = $scope.montresfond[id].img1
      
  })