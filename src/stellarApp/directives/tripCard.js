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
        templateUrl: '/stellarApp/partials/tripCard.html'
    };
};

NS.stellarApp.directive('tripCard', NS.tripCard);


