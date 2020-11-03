app.controller('HomeController', ['$scope', 'nbaService', 
                          function($scope, nbaService){
    
                            
   nbaService.getTeams().then(function(response){
       $scope.teams = response.data;
       //console.log("Logging Teams: " + JSON.stringify(response.data));
   });

   nbaService.searchForPlayerByLastName("Dragic").then(function(response){
       resultData = response.data.data;
       // search for players with last name Davis only
       var result = resultData.filter(player => player.last_name.toLowerCase() === "dragic");
       console.log(JSON.stringify(result));
   });

   $scope.author = 'Ray';
}]);