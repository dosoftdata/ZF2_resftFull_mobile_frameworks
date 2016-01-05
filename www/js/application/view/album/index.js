define(["model/album", "collection/album-list", "text", 'text!template/album/index.html'], function(Album, AlbumList, text, AlbumTpl) {
	var IndexView = Backbone.View.extend({
		model : Album,
		initialize: function() {
		},
		sync : function (render) {
			var albumList = new AlbumList;
			var view = this;
			Backbone.sync('read', albumList, {
				success : function (result) {
					albumList.add(result.ret);
					view.collection = albumList;
					view.render();
				}
			});
		},
		render: function() {
			albumList = this.collection;
			albums = albumList.models;
//			console.log(_.template(AlbumTpl, albums));
			this.template = _.template(AlbumTpl, albums);
			console.log(this);
			$("#page-wrapper").html(this.template);
		}
	});
	return IndexView;
});