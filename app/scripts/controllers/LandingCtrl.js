/**
 * Created by sguerrero on 1/18/17.
 */

(function() {
    function LandingCtrl() {
        this.heroTitle = "Turn the Music Up!";
    }

    angular
        .module('blocJams')
        .controller('LandingCtrl', LandingCtrl);
})();