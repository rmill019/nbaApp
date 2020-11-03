app.service('nbaService', ['$http', function($http){

    return {
        getTeams: function() {
            return $http({
                method: 'GET',
                url: 'https://www.balldontlie.io/api/v1/teams'
            }); // returns a promise
        },
        searchForPlayerByLastName: function(lastName) {
            var baseUrl = "https://www.balldontlie.io/api/v1/players";
            var fullUrl = baseUrl + "?search=" + lastName;
            return $http({
                method: "GET",
                url: fullUrl
            });
        }
    };
    
    // this.getTeams = function() {
    //     return $http({
    //         method: 'GET',
    //         url: 'https://www.balldontlie.io/api/v1/teams',
    //     })
    //     .then(function(response) {
    //         return response.data;
    //     },
    //     function(err) {
    //         return err;
    //     });
    // };

}]);