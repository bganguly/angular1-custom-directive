/**
 * Created by bikram on 12/21/16.
 */

'use strict';

NS.tripCard = function () {
    return {
        restrict: 'E',
        controller: NS.tripCard,
        controllerAs: 'tripCardCtl',
        bindToController: true,
        templateUrl: '/demoApp/partials/tripCard.html'
    };
};

NS.demoApp.directive('tripCard', NS.tripCard);


