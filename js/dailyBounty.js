(function() {
  angular.module('dailyBounty', ['bounty'])

  .directive('dailyBounty', function() {
    return {
      restrict: 'E',
      templateUrl: 'templates/dailyBounty.html',
      controller: function() {
        this.name = '';
        this.description = '';

        this.date = new Date();
        this.date.setHours(0, 0, 0, 0); // get today's date at midnight
        Math.seedrandom(this.date.getTime());

        var index = Math.random() * bountyController.
      },
      controllerAs: 'dailyBountyCtrl'
    };
  });
})();
