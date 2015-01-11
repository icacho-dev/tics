angular.module('app.directives',[])
.directive('comboItem' , function(){
	return {
		restrict: '	E',
		scope: {
			ngBind: '=ngModel',
			ngLabel: '='
		},
		replace: true,
		require: 'ngModel',
		controller: function($scope){
			console.info('comboItem' + $scope.ngBind);
			console.info('label' + $scope.ngLabel);
		},
		templateUrl:'templates/comboItem.html'
	}
})
.directive('checkList' , function(){
	return {
		restrict: '	E',
		scope: {
			ngBind: '=ngModel',
			ngLabel: '='
		},
		replace: true,
		require: 'ngModel',
		controller: function($scope){
			console.info('checkList' + $scope.ngBind);
			console.info('label' + $scope.ngLabel);
		},
		templateUrl:'templates/checkList.html'
	}
})
.directive('toggleSiNo' , function(){
	return {
		restrict: '	E',
		scope: {			
			ngStatus: '=',
			ngValue: '=',
			ngLabel: '=',
			ngSublabel: '=',
			ngType: '='
		},
		replace: true,		
		controller: function($scope){
			$scope.$watch('ngStatus', function() {
		       $scope.ngValue = (!$scope.ngStatus)?0:$scope.ngValue;
		   });
		},
		templateUrl:'templates/toggleSiNo.html'
	}
})
.directive('toggleSiNoCombo' , function(){
	return {
		restrict: '	E',
		scope: {
			ngBind: '=ngModel',
			ngLabel: '=',
			ngSubLabel: '='
		},
		replace: true,		
		controller: function($scope){
			$scope.$watch('ngBind' , function() {
				$scope.ngStatus = ($scope.ngBind.value != 0);
			});
		},
		templateUrl:'templates/toggleSiNoCombo.html'
	}
})
;