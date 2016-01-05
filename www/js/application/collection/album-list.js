define(["model/album"], function(Album) {
	var AlbumList = Backbone.Collection.extend({
		url: window.location.origin+'/album-rest-api',
		model : Album
	});
	return AlbumList;
});