define(["jquery", "underscore", "backbone"], function($, _, Backbone) {
	Backbone.history.start({pushState: "pushState" in window.history});
    $(function() {
		if (Backbone.history && Backbone.history._hasPushState) {
			$(document).delegate("a", "click", function(evt) {
				var href = $(this).attr("href");
				evt.preventDefault();
				Backbone.history.navigate(href, true);
			});
		}
		requirejs(["business/album"]);
    });
});