define(["model/album", "collection/album-list", "text", 'text!template/album/edit.html'], function(Album, AlbumList, text, EditTpl) {
	var EditView = Backbone.View.extend({
		model : Album,
		el : '#page-wrapper',
		initialize: function() {
		},
		render: function(model) {
			this.model = model;
			album = this.model;
			this.template = _.template(EditTpl, album),
			$(this.el).html(this.template);
		},
		events : {
			"click #submitbutton" : "submit",
		},
		submit : function (event) {
			var title = $('#title').val();
			var artist = $('#artist').val();
			album = this.model;
			album.set({title: title, artist: artist});
			Backbone.sync('update', album, {
				success : function (result) {
					console.log(result);
					console.log(result.code);
					console.log(result.ret);
					if (result.code == 0) {
						Backbone.history.navigate('album-rest', true);
					} else {
						alert(result.ret);
					}
				}
			});
			event.preventDefault();
		}
	});
	return EditView;
});