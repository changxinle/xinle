//查找已有模块
var app = angular.module("shop");

app.controller("productsCtrl", function($scope, $http) {
    $http({
        method: "GET",
        url: "http://127.0.0.1/angularjs01/php/getProducts.php"
    }).success(function(data, status, config, header) {
        $scope.products = data;
        $scope.changeClassOfSelectedPage = function(page) {
            return $scope.choosedPageNumber == page ? "btn-primary" : "";
        }

        $scope.getProductsOfPage = function(pageNumber) {
                var productsOfPage = [];
                $scope.choosedPageNumber = pageNumber;
                pageNumber = pageNumber - 1;
                for(var i = pageNumber * 3; i < pageNumber * 3 + 3; i++) {
                    if(angular.isUndefined($scope.categoryProducts[i]))
                        continue;
                    productsOfPage.push($scope.categoryProducts[i]);

                }
                $scope.productsOfPage = productsOfPage;
                //                      console.log($scope.productsOfPage);
            }
            //              $scope.getProductsOfPage(1);
        $scope.selectCategory = function(category) {
            var categoryProducts = [];
            if(category == "all") {
                $scope.choosed = "all";
                categoryProducts = $scope.products;
            } else {
                $scope.choosed = category;
                for(var i = 0; i < $scope.products.length; i++) {
                    //                          console.log(category);

                    if($scope.products[i].category == category) {

                        categoryProducts.push($scope.products[i]);
                    }
                }
            }
            $scope.categoryProducts = categoryProducts;
            $scope.getProductsOfPage(1);
            //                  console.log(categoryProducts);
        }
        $scope.selectCategory("all");
        $scope.changeClassOfCategory = function(category) {
            return $scope.choosed == category ? "btn-primary" : "";
        }
        $scope.getPageNumbers = function() {
            var count = $scope.categoryProducts.length / 3;
            var pages = [];

            count = Math.floor(count);
            for(var i = 0; i <= count; i++) {
                pages.push(i + 1);
            }

            return pages;
        };

        $scope.addToCart = function(product) {
            //假定开始购物车没有这个商品
            var hasThisProduct = false;
            for(var i = 0; i < $scope.cartData.length; i++) {
                if($scope.cartData[i].id == product.id) {
                    $scope.cartData[i].count++;
                    hasThisProduct = true;
                    break;
                }
            }
            if(hasThisProduct == false) {
                $scope.cartData.push({
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    count: 1
                })
            }
            console.log($scope.cartData);
        };

    })

})