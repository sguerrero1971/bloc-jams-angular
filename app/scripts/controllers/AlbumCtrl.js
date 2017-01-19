/**
 * Created by sguerrero on 1/18/17.
 */
(function() {
    function AlbumCtrl() {
        this.albumData = angular.copy(albumPicasso);
    }

    angular
        .module('blocJams')
        .controller('AlbumCtrl', AlbumCtrl);
})();