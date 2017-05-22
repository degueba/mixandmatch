// ======================================================================
// prototypes ===========================================================
// ======================================================================

String.prototype.replaceSpecialChars = function(){//remove caracteres especiais
    var string = this.toLowerCase();
	var mapHex 	= {
		a : /[\xE0-\xE6]/g,
		e : /[\xE8-\xEB]/g,
		i : /[\xEC-\xEF]/g,
		o : /[\xF2-\xF6]/g,
		u : /[\xF9-\xFC]/g,
		c : /\xE7/g,
		n : /\xF1/g
	};

	for ( var index in mapHex ) {
		var expressaoRegular = mapHex[index];
		string = string.replace( expressaoRegular, index );
	}

	return string;
};

String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

// ======================================================================
// angular app ==========================================================
// ======================================================================

var app = angular.module("OMMixingandmatch",['ngSanitize'])




app.factory('vtexService',function($http) {

	var storeUrl = 'www.comprafacillingerie.com.br';


	var _search = function(param,range){		
		//var urlRequest = "/api/catalog_system/pub/products/search/?" + param;
		var urlRequest = "arquivos/catalog.json";
		return $http({
			'url': urlRequest,
			'method': 'GET',
			'crossDomain': true,
			'headers': {
			    "accept": "application/json",
			    "content-type": "application/json",
			    "resources": range,
			    "cache-control": "no-cache"
			},
			
		})		
	}

	var _getProductVariations = function(productId){
		//var urlRequest = "/api/catalog_system/pub/products/variations/" + productId
		var urlRequest = "arquivos/catalog.json";
		
		return $http({
			'method': 'GET',			
			'url':urlRequest
		})
	}

	var _addToCart = function(itemArr){       
	    return vtexjs.checkout.addToCart(itemArr)
	}
   
	var _removeItemCart = function(itemArr){   
	    return vtexjs.checkout.removeItems(itemArr)
	}

   	return {
    	search 					: _search,
    	getProductVariations 	: _getProductVariations,
    	addToCart 				: _addToCart,
    	removeItemCart 			: _removeItemCart
   	};

});


app.controller("mainCtrl", ['$scope','$filter','$http','vtexService',function($scope,$filter,$http,vtexService){
   
	$scope.orderForm = {};

	//loading
    $scope.loading = false;
    $scope.isLoading = function () {
        return $http.pendingRequests.length > 0;
    };

    $scope.$watch($scope.isLoading, function (loading){
    	$scope.loading = loading;
        var $elRoot = angular.element(document.querySelectorAll("#OMMixingandmatch"))
        if(loading){
			$elRoot.addClass('loading')
        }else{
			$elRoot.removeClass('loading')
        }
    });

    /*


	TOP
		MODELO :
			Tomara que Caia,
			Cortininha,
			Tradicional 
		BOJO:
			Com Bojo e Sem Bojo

	CALCINHA
		MODELO:
			Conforto,
			Com Metal,
			Fio Dental,
			Cintura Alta,
			Lacinho
			Borboleta.

	Grupo - Características
	
	Vídeo 	(48)
	Modelo 	(51)
	Gênero 	(57)
	Idade 	(58)
	Cor 	(52)
	Bojo 	(53)	
	
    */

	$scope.categoryFilters 	= [
		{
			'title' : 'Top',
			'idClass':'top',
			'description' : 'Escolha a parte de cima',
			'defaultParam' : 'fq=C:/9/84/',
			'categories' : [
				{	
					'title': 'Bojo',
					'idClass':'bojo',
					'filters' : [
						{
							'title': 'Com bojo',
							'param':'fq=C:/9/84/&fq=specificationFilter_53:Com+Bojo',
							'ico' : '&#xe910;',
							'idClass':'modelo'
						},
						{
							'title': 'Sem bojo',
							'param':'fq=C:/9/84/&fq=specificationFilter_53:Sem+Bojo',
							'ico' : '&#xe908;',
							'idClass':'semBojo'
						}				
					]
				},
				{	
					'title': 'Modelo',
					'idClass':'Modelo',
					'filters' : [
						{
							'title': 'Tomara que caia',
							'param':'fq=C:/9/84/&fq=specificationFilter_51:Tomara+que+caia',
							'ico' : '&#xe90e;',
							'idClass':'tomara-que-caia'
						},
						{
							'title': 'Cortininha',
							'param':'fq=C:/9/84/&fq=specificationFilter_51:Cortininha',
							'ico' : '&#xe908;',
							'idClass':'cortininha'
						},
						{
							'title': 'Tradicional',
							'param':'fq=C:/9/84&fq=specificationFilter_51:Tradicional',
							'ico' : '&#xe910;',
							'idClass':'tradicional'
						}
					]
				},
				{	
					'title': 'Cores',
					'idClass':'cores',
					'filters' : [
						{
							'title': 'Estampado',
							'param':'fq=C:/9/84/&fq=specificationFilter_61:Estampado',
							'ico' : '&#xe905;',
							'idClass':'estampado'
						},
						{
							'title': 'Liso',
							'param':'fq=C:/9/84/&fq=specificationFilter_61:Liso',
							'ico' : '&#xe907;',
							'idClass':'liso'
						}
					]
				}

			]

		},
		{
			'title' : 'Calcinha',
			'idClass':'calcinha',
			'description' : 'Escolha a parte de baixo',			
			'defaultParam' : 'fq=C:/9/85/',
			'categories' : [				
				{	
					'title': 'Estilo',
					'idClass':'estilo',
					'filters' : [
						{
							'title': 'Conforto',
							'param':'fq=C:/9/85&fq=specificationFilter_54:Confort',
							'ico' : '&#xe906;',
							'idClass':'conforto'
						},
						{
							'title': 'Com Metal',
							'param':'fq=C:/9/85&fq=specificationFilter_54:Com+Metal',
							'ico' : '&#xe904;',
							'idClass':'chic'
						},
						{
							'title': 'Fio Dental',
							'param':'fq=C:/9/85&fq=specificationFilter_54:Fio+Dental',
							'ico' : '&#xe90a;',
							'idClass':'fio-dental'
						},
						{
							'title': 'Cintura Alta',
							'param':'fq=C:/9/85&fq=specificationFilter_54:Cintura+Alta',
							'ico' : '&#xe902;',
							'idClass':'cintura-alta'
						},
						{
							'title': 'Lacinho',
							'param':'fq=C:/9/85&fq=specificationFilter_54:Laçinho',
							'ico' : '&#xe90c;',
							'idClass':'lacinho'
						},
						{
							'title': 'Borboleta',
							'param':'fq=C:/9/85&fq=specificationFilter_54:Borboleta',
							'ico' : '&#xe900;',
							'idClass':'borboleta'
						}
					]
				},
				{	
					'title': 'Cores',
					'idClass':'cores',
					'filters' : [
						{
							'title': 'Estampado',
							'param':'fq=C:/9/85&fq=specificationFilter_60:Estampado',
							'ico' : '&#xe901;',
							'idClass':'estampado'
						},
						{
							'title': 'Liso',
							'param':'fq=C:/9/85&fq=specificationFilter_60:Liso',
							'ico' : '&#xe903;',
							'idClass':'liso'
						}
					]
				}
			]

		}
	]

	// variáveis para para catalogo  ========================================

	$scope.selectedGroup 	= 0;		// departamento selecionado
	$scope.catalogResults 	= []; 		// catalogo de produtos
	$scope.nextPage 		= true; 	// catalogo de produtos
	$scope.page 			= [1,1]; 	// paginação de categorias
	

	// variáveis para filtro de sku =========================================

	$scope.selectedProduct 	= null;		// produto focado
	$scope.selectedSku		= []; 		// sku selecionado
	$scope.combination 		= [];		// combinação de sku
	$scope.filteredSku		= [];		// sku filtrado
	$scope.searchSku		= '';


	// ======================================================================
	// metodos privados =====================================================
	// ======================================================================

	var _generateSkuVariation = function(data){
		var _arraySkuVariation 	= ['Tamanho','Cor'];
		var dimensionsOrdened 	= [];		
		dimensionsOrdened['Tamanho']  	= ["P","M","G","GG"];
		dimensionsOrdened['Cor']  		= null;
		
		
		angular.forEach(data, function(product, i){ 
			data[i].dimensions 			= ['Tamanho','Cor'];
			data[i].activeImageId 		= data[i].items[0].images[0].imageId;
			data[i].filteredSku 		= [data[i].items[0]] //set de sku inicial
			
			angular.forEach(data[i].items, function(sku, j){

				data[i].items[j].filterDimention = "";
							
				angular.forEach(data[i].items[j].variations, function(dimension, k){
						
					if (data[i].items[j].variations.length > k && k > 0) {
						data[i].items[j].filterDimention += " - ";
					}

					data[i].items[j].filterDimention += dimension + data[i].items[j][dimension][0]
					
					
					if(!_arraySkuVariation[dimension]){//caso não exista a dimensao, ela é instanciada
						_arraySkuVariation[dimension] = [];
					}
					if(_arraySkuVariation[dimension].indexOf(data[i].items[j][dimension][0]) == '-1'){
						_arraySkuVariation[dimension].push(data[i].items[j][dimension][0]);
					}
					if(data[i].dimensions.indexOf(dimension) == '-1'){
						data[i].dimensions.push(dimension);
					}
						
					
				})
			})

			data[i].dimensionsMap = _arraySkuVariation;

			var dimensions = [];
			
			angular.forEach(data[i].dimensions, function(value, key) {
				if (!dimensionsOrdened[value]){
					dimensions.push({'dimension':value,'options':data[i].dimensionsMap[value]})
				}else{
					dimensions.push({'dimension':value,'options':dimensionsOrdened[value]})
				}
			})


			
			

			data[i].skuVariations = dimensions;



		
		})

		console.info(data)

		
		return data;
	}

	var _prepareOrderForm = function(orderForm){
		$scope.orderForm = orderForm;
		$scope.orderForm.value = orderForm.value * 0.01;
		angular.forEach($scope.orderForm.items, function(item, i){
			$scope.orderForm.items[i].price = item.price * 0.01;
			$scope.orderForm.items[i].listPrice = item.listPrice * 0.01;
		})

		$scope.$apply();
		
	}

	// ======================================================================
	// metodos publicos =====================================================
	// ======================================================================
	
	// catalogo =============================================================

	$scope.selectGroup = function(index){
		$scope.selectedGroup 	= index;
	}

	$scope.skuActive = function(evt,productId,dimension,optionKey){
		jQuery("#product_" + productId + " .product__sku." + optionKey +  " .product__skuItem").removeClass('active');
		jQuery("#product_" + productId + " ."+dimension).addClass('active');
	}

	$scope.setSelectedSku = function(product, indexSku){
		product.filteredSku = product.items[indexSku]
	}

	$scope.filterSku = function(optionKey, optionValue, product){
		
		product.filteredSku 			= [];
		product.avaliableDimention 		= []
		
		$scope.searchSku				= optionKey + optionValue;
		$scope.selectedProduct 			= product;
		$scope.selectedSku[optionKey] 	= optionValue;
		
		product.filteredSku 			= $filter('filter')($scope.selectedProduct.items, $scope.selectedSku)
		filteredVariation 				= $filter('filter')($scope.selectedProduct.items, $scope.selectedSku[optionKey])

		var testNotify = product.skuVariations.length == Object.keys(($scope.selectedSku)).length;

		
		angular.forEach(product.items, function(sku, i){ // desabilitando todos os skus
			angular.forEach(sku.variations, function(variation, j){
				product.avaliableDimention[sku[variation]] = false;
			})
		})
		
		angular.forEach(filteredVariation, function(sku, i){
			angular.forEach(sku.variations, function(variation, j){
				if(sku.sellers[0].commertialOffer.AvailableQuantity > 0){
					product.avaliableDimention[sku[variation]] = true;
				}
			})
		})

		if(product.filteredSku.length == 1) { //caso o filtro poossua 1 resultado

			product.activeImageId = product.filteredSku[0].images[0].imageId; // ativa a primeira imagem do primeiro sku
			
			if(product.filteredSku[0].sellers[0].commertialOffer.AvailableQuantity == 0) {
				if(testNotify) {
					product.notifyMe = true;
				}	
				
				$scope.combination[$scope.selectedGroup] = [];
				console.log("Sem estoque")

			}else{
				product.notifyMe = false;
				$scope.combination[$scope.selectedGroup] = product.filteredSku[0];
			}

		}else{
			if(testNotify) {
				product.notifyMe = true;
			}
			//delete $scope.combination[$scope.selectedGroup];
		}

		console.log(product.avaliableDimention)
		
	}


	$scope.activeProduct = function(product){ // seta o selectedProduct
		$scope.selectedProduct = product;
	}


	$scope.search = function(param,idGroup,increment){ // faz a busca de produtos baseado no 'param'
		//console.log(increment)
		
		$('.owl-carousel').trigger('destroy.owl.carousel');
		
		var page = '0-10';
		$scope.searchParamActive = param;

		if(!increment) {
			$scope.catalogResults[idGroup].page = 1;
			$scope.catalogResults[idGroup].nextPage = true;
		}else{
			page = $scope.catalogResults[idGroup].page * 10;
   			page = (page + 1) + '-' + (page+10);
		}


	
   		//console.log("paginação: " + page)
   		
   		//request ==================================
		var request = vtexService.search(param,page)
		request.then(function(result){			
			
			if($scope.catalogResults[idGroup].nextPage && increment){
				
				//console.log('============================================== incrementando ' + $scope.categoryFilters[idGroup].title + ' ==============================================')
				
				result.data = _generateSkuVariation(result.data)
				angular.forEach(result.data,function(item,i){
					$scope.catalogResults[idGroup].items.push(item)
				})
				$scope.catalogResults[idGroup].page++;

			}else{
				//console.log('============================================== carregando ' + $scope.categoryFilters[idGroup].title + ' ==============================================')
				
				$scope.catalogResults[idGroup].page = 1;			
				$scope.catalogResults[idGroup].items 	= _generateSkuVariation(result.data);			
			}
			

			if(result.status == '206'){
				$scope.catalogResults[idGroup].nextPage = true;
			}
			
			//console.info($scope.catalogResults)
		},function(err){
			//console.error(err);
		})
   	}


   	$scope.variationClass = function(optionKey,optionValue){ // cria uma classe para identificar o tipo de variacao;
   		var className 	= "skuespec_" + optionKey + "_opcao_" + optionValue;
   		optionValue 	= optionValue.replaceSpecialChars()
   		className 		= "skuespec_" + optionKey + "_opcao_" + optionValue.capitalize().split(' ').join('-');
   		
   		return className;
   	}
	
	// chekout	=============================================================

	$scope.cartAddItems = function(){ // adidiona itens no carrinho
		
		var param = [];

		for (var i = 0; i < $scope.combination.length; i++) {			
			param.push({id:$scope.combination[i].itemId,quantity:1,seller:1});
		}

		
		var request = vtexService.addToCart(param)		
		request.then(function(result){
			//console.info(result);
		},function(err){
			//console.error(err);
		})
	}

	$scope.cartRemoveItem = function(index){
		var param = [{index:index}];
		
		var request = vtexService.removeItemCart(param)		
		request.then(function(result){
			console.info(result);
		},function(err){
			console.error(err);
		})
	}

	// ======================================================================
	// eventos	=============================================================
	// ======================================================================

	angular.forEach($scope.categoryFilters, function(group, i){ // faz a carga inicial do catalogo
		$scope.catalogResults.push({items:[],page:1,nextPage:true})
		$scope.search($scope.categoryFilters[i].defaultParam,i,false)
	})

	// variaveis para o scroll	=============================================

	var configScrollbarCheckout = { // objeto de set do scroll do resumo de carrinho
 		theme:"dark",
 		callbacks:{
		    onTotalScroll: function(){}
		}
    }

    var configScrollbarTabContent = { // objeto de set do scroll do catalogo
 		theme:"dark",
 		callbacks:{
		    onTotalScroll: function(){
				$scope.search($scope.searchParamActive,$scope.selectedGroup,true)
		    }
		}
    }
	
	// documento pronto	=====================================================

    angular.element(document).ready(function () {

		angular.element(document.querySelectorAll(".tab__body")).mCustomScrollbar(configScrollbarTabContent)
		angular.element(document.querySelectorAll(".checkoutList")).mCustomScrollbar(configScrollbarCheckout)
		
		angular.element(window).on('orderFormUpdated.vtex', function(evt, orderForm){
			_prepareOrderForm(orderForm);
		})

		angular.element(window).on('cartProductRemoved.vtex', function(evt, orderForm){
			_prepareOrderForm(orderForm);
		})

		angular.element(window).on('cartProductAdded.vtex', function(evt, orderForm){
			_prepareOrderForm(orderForm);
		})
    })

	$scope.triggerEvent = function(triggerName){
		$(window).trigger(triggerName)
	}
}])

