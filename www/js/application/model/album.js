define([], function() {
	var Album = Backbone.Model.extend({
		idAttribute : 'id',
		urlRoot : window.location.origin+'/album-rest-api'
	});
	return Album;
});