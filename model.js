"use strict";

window.APP = window.APP || {};

APP.NoteModel = Backbone.Model.extend({
	default: {
		title:"",
		content:"",
		id: _.random(0,10000)
	}

});

APP.NoteCollection = Backbone.Collection.extend({
	localStorage: new Backbone.LocalStorage("NoteCollection"),
	model: APP.NoteModel
});