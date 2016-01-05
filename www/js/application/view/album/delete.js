define(["model/album", "collection/album-list", "text", 'text!template/album/delete.html'], function(Album, AlbumList, text, DeleteTpl) {
	var DeleteView = Backbone.View.extend({
		model : Album,
		el : '#page-wrapper',
		initialize: function() {
		},
		render: function(model) {
			this.model = model;
			album = this.model;
			this.template = _.template(DeleteTpl, album),
			$(this.el).html(this.template);
		},
		events : {
			"click #submit-delete-yes" : "submit",
			"click #submit-delete-no" : "back",
		},
		submit : function (event) {
			album = this.model;
			Backbone.sync('delete', album, {
				success : function (result) {
					if (result.code == 0) {
						Backbone.history.navigate('album-rest', true);
					} else {
						alert(result.ret);
					}
				}
			});
			event.preventDefault();
		},
		back : function (event) {
			Backbone.history.navigate('album-rest', true);
			event.preventDefault();
		},
	});
	return DeleteView;
});
