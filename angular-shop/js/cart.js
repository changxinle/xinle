var app = angular.module("shop");
app.controller("checkout", function($scope){
//  console.log($scope.cartData);
    $scope.delete = function(product){
        for (var i = 0; i < $scope.cartData.length; i++) {
            if ($scope.cartData[i].id==product.id) {
            	   $scope.cartData.splice(i,1);
            	   break;
            }
        }
    };
    
});
