(function() {
  angular.module('bounty', [])
  .directive('dailyBounty', function() {
    return {
      restrict: 'E',
      templateUrl: 'templates/dailyBounty.html',
      controller: function() {
        this.bounties = [
          {
            name: 'Commit',
            description: 'Make one commit on any repo'
          },
          {
            name: 'Fix',
            description: 'Fix one bug in any repo'
          },
          {
            name: 'Comment',
            description: 'Comment existing code in any repo'
          },
          {
            name: 'Research',
            description: 'Research upcoming changes'
          }
        ];

        this.date = new Date();
        this.date.setHours(0, 0, 0, 0); // get today's date at midnight
        Math.seedrandom(Date.UTC(this.date.getYear(), this.date.getMonth(), this.date.getDate()));

        this.dailyIndex = Math.floor((Math.random() * this.bounties.length));
      },
      controllerAs: 'dailyBountyCtrl'
    };
  });
})();
