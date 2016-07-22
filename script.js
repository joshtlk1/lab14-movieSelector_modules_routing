var app = angular.module("myModule",["ngRoute"]);


app.config(function($routeProvider) {
	$routeProvider
		.when("/",
		{
			controller:"myController",
			templateUrl: "partials/view1.html"
		})
		.when("/view2",
		{
			controller:"myController",
			templateUrl:"partials/view2.html"
		})
		.when("/view3",
		{
			controller:"myController",
			templateUrl:"partials/view3.html"
		})
		.when("/view4",
		{
			controller:"myController",
			templateUrl:"partials/view4.html"
		})
		.otherwise(
		{
		redirectTo:"/404.page",
		templateUrl:"404page.html"
		});
	

});