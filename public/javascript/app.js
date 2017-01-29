angular.module('reliquary', ['relics', 'primes', 'data', 'rewards'])
	.component("main", {
		templateUrl: "templates/main.template.html",
		controller: ["$scope", "DataService", function($scope, DataService){
				$scope.selected = [true, false, false];
				$scope.select = function(index) {
					$scope.selected = [false, false, false];
					$scope.selected[index] = true;
				}
				
				$scope.login = false;
				
				DataService.service.then(function(service){
					let user = service.getInventory();
					$scope.login = user.valid;
				});
			}]
	})
	
	.component("rlqSelect", {
		templateUrl: "templates/rlq-select.template.html",
		controller: function($scope){
			
		}
	})