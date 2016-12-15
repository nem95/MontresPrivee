angular.module("QuartzController", [])

  .controller('quartzController', function($scope, $stateParams) {

      $scope.montres="http://www.ablogtowatch.com/wp-content/uploads/2016/05/Rolex-Daytona-116508-yellow-gold-green-watch-12.jpg"
      //on declare le scope slide, qui pourra etre utilisé dans le slider dans la vue home.html
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

     
      
  })

.controller('modelController', function($scope, $stateParams) {

      $scope.montres="http://www.ablogtowatch.com/wp-content/uploads/2016/05/Rolex-Daytona-116508-yellow-gold-green-watch-12.jpg"
      //on declare le scope slide, qui pourra etre utilisé dans le slider dans la vue home.html
      $scope.montresfond = [
        { 
          img :  "http://www.alux.com/wp-content/uploads/2014/03/Audemars-Piguet-Royal-Oak-Date.jpg",
          img1 : "http://www.my-watchsite.fr/17370-home_default/royal-oak-automatique.jpg",
          id : 0
        },
        { 
          img :  "http://www.hublot.com/templates/joostrap-hublot-v2/images/craftsmanship/materials/hublot-material-rubber.jpg",
          img1 : "http://www.my-watchsite.fr/17877-home_default/classic-fusion-chronographe.jpg",
          id : 1
        },{ 
          img :  "http://www.bucherer.com/sites/default/files/styles/img_style_2560/public/watches/hero/AudermarsPiguet_Header.jpg?itok=p6zC0RhL&timestamp=1407433874",
          img1 : "http://www.mikaeldan.com/ecmd_images/produits/7915.jpg",
          id : 2
        },{ 
          img :  "http://www.montres-de-luxe.com/photo/art/default/673883-823245.jpg?v=1289479443",
          img1 : "http://www.my-watchsite.fr/18780-home_default/calibre-de-cartier-diver.jpg",
          id : 3
        },
    
      ];

      console.log($scope.montresfond);

      var id = $stateParams.id; // Reading productid from URL
      console.log(id);
      $scope.cover = $scope.montresfond[id].img1
      
  })



.controller('PopupCtrl',function($scope, $ionicPopup, $timeout) {

 // Triggered on a button click, or some other target
 $scope.showPopup = function() {
   $scope.data = {}

   // An elaborate, custom popup
   var myPopup = $ionicPopup.show({
     template: '<input type="password" ng-model="data.wifi">',
     title: 'Enter Wi-Fi Password',
     subTitle: 'Please use normal things',
     scope: $scope,
     buttons: [
       { text: 'Cancel' },
       {
         text: '<b>Save</b>',
         type: 'button-positive',
         onTap: function(e) {
           if (!$scope.data.wifi) {
             //don't allow the user to close unless he enters wifi password
             e.preventDefault();
           } else {
             return $scope.data.wifi;
           }
         }
       },
     ]
   });
   myPopup.then(function(res) {
     console.log('Tapped!', res);
   });
   $timeout(function() {
      myPopup.close(); //close the popup after 3 seconds for some reason
   }, 3000);
  };
   // A confirm dialog
   $scope.showConfirm = function() {
     var confirmPopup = $ionicPopup.confirm({
       title: 'Consume Ice Cream',
       template: 'Vous avez une heure pour réalisé votre achat sur notre site internet EoWatch sans quoi, la montre pourra être vendue à un autre client'
     });
     confirmPopup.then(function(res) {
       if(res) {
         console.log('You are sure');
       } else {
         console.log('You are not sure');
       }
     });
   };

   // An alert dialog
   $scope.showAlert = function() {
     var alertPopup = $ionicPopup.alert({
       title: 'Don\'t eat that!',
       template: 'It might taste good'
     });
     alertPopup.then(function(res) {
       console.log('Thank you for not eating my delicious ice cream cone');
     });
   };
});