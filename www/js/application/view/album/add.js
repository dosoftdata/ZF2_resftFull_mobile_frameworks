define(["model/album", "collection/album-list", "text", 'text!template/album/add.html'], function(Album, AlbumList, text, AddTpl) {
	var AddView = Backbone.View.extend({
		model : Album,
		el : '#page-wrapper',
		initialize: function() {
		},
		render: function() {
			this.template = _.template(AddTpl),
			$(this.el).html(this.template);
		},
		events : {
			"click #submit-add" : "submit",
		},
		submit : function (event) {
			event.preventDefault();
			var id = $('#id').val();
			var title = $('#title').val();
			var artist = $('#artist').val();
			album = new Album;
			album.set({id : id, title: title, artist: artist});
			Backbone.sync('create', album, {
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
		}
	});
	return AddView;
});
