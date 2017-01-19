/**
 * Created by sguerrero on 1/18/17.
 */
(function() {
    function AlbumCtrl(Fixtures) {
        this.albumData = Fixtures.getAlbum();
    }

    angular
        .module('blocJams')
        .controller('AlbumCtrl',['Fixtures', AlbumCtrl]);
})();