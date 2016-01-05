requirejs.config({
    baseUrl: "/",
    paths: {
		"jquery": "//ajax.aspnetcdn.com/ajax/jQuery/jquery-2.0.3.min",
		"underscore" : "js/library/underscore-min",
		"backbone" : "js/library/backbone-min",
		"text" : "js/library/text",
		"application" : "js/application",
		"model" : "js/application/model",
		"view" : "js/application/view",
		"collection" : "js/application/collection",
		"business" : "js/application/business",
		"config" : "js/application/config",
		"template" : "js/application/template",
		"router" : "js/application/router"
    },
	shim: {
		underscore: {
			exports: '_'
		},
		backbone: {
			deps: ["underscore", "jquery"],
			exports: 'Backbone'
		}
	}
});
requirejs(["application/main"]);

function loadCss(url) {
    var link = document.createElement("link");
    link.type = "text/css";
    link.rel = "stylesheet";
    link.href = url;
    document.getElementsByTagName("head")[0].appendChild(link);
}