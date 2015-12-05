(function() {
  angular.module('bounty', [])
  .directive('dailyBounty', function() {
    return {
      restrict: 'E',
      templateUrl: 'templates/dailyBounty.html',
      controller: function() {
        var that = this;
        var numPrev = 2;

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
          },
          {
            name: 'Refactor',
            description: 'Improve existing code'
          }
        ];

        this.date = new Date();
        this.date.setHours(0, 0, 0, 0); // get today's date at midnight

        // calculate current and previous bounties
        // current day can be reffered to as prevday0 (in fact, it uses this class in bounty.css)
        this.prevBounties = [];
        for(var i = 0; i <= numPrev; i++) {
          this.prevBounties.push(getBountyIndex(getDateWithOffset(-1 * i)));
        }//end for

        function getBountyIndex(bountyDate) {
          Math.seedrandom(Date.UTC(bountyDate.getYear(), bountyDate.getMonth(), bountyDate.getDate()));
          return Math.floor((Math.random() * that.bounties.length));
        }// end getBountyIndex

        function getDateWithOffset(offset) {
          var newDate = new Date(that.date.getTime());
          newDate.setDate(newDate.getDate() + offset);
          return newDate;
        }// end getDateWithOffset
      },
      controllerAs: 'dailyBountyCtrl'
    };
  });
})();
