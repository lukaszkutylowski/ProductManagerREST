angular.module('app', []).controller('ProductController', function($http) {
	var vm = this;
	
	function refreshData() {
		$http({
			method : 'GET',
			url : 'api/products'
		}).then(function sucess(response) {
			vm.products = response.data;
			console.log(vm.products);
		}, function error(response) {
			console.log('API error ' + response.status);
		});
	}
	
	vm.addProduct = function(product) {
		$http({
			method : 'POST',
			url : 'api/products',
			data : product
		}).then(function sucess(response) {
			refreshData();
			vm.product = {};
		}, function error(response) {
			console.log('Data is not saved ' + product);
		});
	}
	
	vm.appName = 'Product Manager Application';
	refreshData();
});