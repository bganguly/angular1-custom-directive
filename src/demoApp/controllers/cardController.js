/**
 * Created by bikram on 12/21/16.
 */
'use strict';

NS.tripCard = function ($http, $scope) {
    this.httpService = $http;
    this.scope = $scope;

    // variable properties
    this.tripCardsData = null;
    this.init_(this.httpService);
};

NS.tripCard.prototype.init_ = function (httpService) {
    this.getTripData(httpService);
};

NS.tripCard.prototype.getTripData = function (httpService) {
    var self = this;
    httpService.get('/demoApp/data/response.json').
    success(function (data, status) {
        if (typeof data !== 'undefined') {
            self.tripCardsData = data;
        } else {
            console.log("error parsing server data")
        }
    }).
    error(function () {
        console.log("error retrieving server data")
    });
};


NS.demoApp.controller('tripCard', NS.tripCard);