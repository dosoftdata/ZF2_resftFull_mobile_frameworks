define(["view/album/add", "view/album/index", "view/album/edit", "view/album/delete", "collection/album-list"], function(AddView, IndexView, EditView, DeleteView, AlbumList) {
	var AlbumRouter = Backbone.Router.extend({
		initialize: function(options) {
			this.indexView = new IndexView;
			this.editView = new EditView();
			this.addView = new AddView;
			this.deleteView = new DeleteView();

			var currentInfo = this.current();
			var fn = this[currentInfo.route];
			if(typeof fn === 'function') {
				fn.apply(this, currentInfo.params);
			}
		},
		current : function() {
		    var Router = this,
		        fragment = Backbone.history.fragment,
		        routes = _.pairs(Router.routes),
		        route = null, params = null, matched;

		    matched = _.find(routes, function(handler) {
		        route = _.isRegExp(handler[0]) ? handler[0] : Router._routeToRegExp(handler[0]);
		        return route.test(fragment);
		    });

		    if(matched) {
		        // NEW: Extracts the params using the internal
		        // function _extractParameters
		        params = Router._extractParameters(route, fragment);
		        route = matched[1];
		    }

		    return {
		        route : route,
		        fragment : fragment,
		        params : params
		    };
		},
		routes: {
			"album-rest/add":        		"create",
			"album-rest":                 	"read",
			"album-rest/edit/:id":        	"update",
			"album-rest/delete/:id":        "delete",
		},
		create: function() {
			this.addView.render();
			alert('add');
		},
		read: function() {
			this.indexView.sync();
			alert('read');
		},
		update: function(id) {
			var albumList = new AlbumList;
			var self = this;
			Backbone.sync('read', albumList, {
				success : function (result) {
					albumList.add(result.ret);
					var model = albumList.get(id);
					self.editView.render(model);
					alert('edit');
				}
			});
		},
		'delete': function(id) {
			var albumList = new AlbumList;
			var view = this;
			Backbone.sync('read', albumList, {
				success : function (result) {
					albumList.add(result.ret);
					view.collection = albumList;
					var model = albumList.get(id);
					console.log(model);
					view.deleteView.render(model);
					alert('delete');
				}
			});

		}
	});
	return AlbumRouter;
});