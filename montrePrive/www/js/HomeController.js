angular.module("HomeController", [])

  .controller('mainController', function($scope) {

      //on declare le scope slide, qui pourra etre utilisé dans le slider dans la vue home.html
      $scope.slide = [
        "http://lovetime.fr/wp-content/uploads/2012/11/breitling-transocean-chronograph-unitime-1.jpg",
        "http://img1.gtsstatic.com/montre/la-montre-grandmaster-chime-ref-5175-de-patek-philippe_160321_w460.jpg",
        "http://www.masculin.com/images/article/11407/th/montre-breitling-bentley-b06-s-800x.jpg",
        "http://image.excite.fr/hommes/guide/montres-homme-de-luxe-default-33931-0.jpg",

      ];

      $scope.automat="https://montre-automatique.com/wp-content/uploads/2014/02/seagull-light-380x565.jpg";

      $scope.section_quartz="https://www.bijourama.com/media/produits/festina-montres/img/montre-festina-f16822-2-montre-multifonctions-quartz-hommef16822_2_680x680.jpg";

      $scope.section_manuelles="http://www.montres-passion.fr/wp-content/uploads/2013/12/Montre-Breva-G%C3%A9nie-1-barom%C3%A8tre-m%C3%A9canique.jpg";
      
      $scope.marques="http://nttw.co/wp-content/uploads/2015/08/fondationlouisvuitton-interieur-jaune-plan-deau-tendances-design-media-influenceur-trend1.jpg"; 

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
        //console.log('Slide change is beginning');
      });

      $scope.$on("$ionicSlides.slideChangeEnd", function(event, data){
        // note: the indexes are 0-based
        $scope.activeIndex = data.slider.activeIndex;
        $scope.previousIndex = data.slider.previousIndex;
      });
  })
