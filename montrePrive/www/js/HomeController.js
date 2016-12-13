angular.module("HomeController", [])

  .controller('mainController', function($scope) {

      //on declare le scope slide, qui pourra etre utilisé dans le slider dans la vue home.html
      $scope.slide = [
        "http://lovetime.fr/wp-content/uploads/2012/11/breitling-transocean-chronograph-unitime-1.jpg",
        "http://img1.gtsstatic.com/montre/la-montre-grandmaster-chime-ref-5175-de-patek-philippe_160321_w460.jpg",
        "http://www.masculin.com/images/article/11407/th/montre-breitling-bentley-b06-s-800x.jpg",
        "http://image.excite.fr/hommes/guide/montres-homme-de-luxe-default-33931-0.jpg",

      ];

      $scope.automat="http://www.clairediterzi.fr/wp-content/uploads/2015/12/montre-automatique.jpg";

      $scope.section_quartz="http://www.clairediterzi.fr/wp-content/uploads/2015/12/montre-automatique.jpg";

      $scope.marques="http://maison1.advcdn.net/images/medias/000/038/000038945/660.jpg"; 

      $scope.options = {
        effect: 'fade',
        autoplay: 2000,
        speed: 500,
      }

      $scope.$on("$ionicSlides.sliderInitialized", function(event, data){
        // data.slider is the instance of Swiper
        $scope.slider = data.slider;
      });

      $scope.$on("$ionicSlides.slideChangeStart", function(event, data){
        console.log('Slide change is beginning');
      });

      $scope.$on("$ionicSlides.slideChangeEnd", function(event, data){
        // note: the indexes are 0-based
        $scope.activeIndex = data.slider.activeIndex;
        $scope.previousIndex = data.slider.previousIndex;
      });
  })
