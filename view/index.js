"use strict";
window.APP = window.APP || {};

APP.NoteIndexView = Backbone.View.extend({
	events: {
		"click button.add" : 'addNote'
	},

	template: _.template($('#indexTemplate').html()),

	render: function(){
		this.$el.html(
			this.template({notes: this.collection.toJSON()})
		);
		return this;
	},

	initialize: function(){
		this.addNote();
	},

	addNote: function(){
		Backbone.history.navigate("note/new",true);
	}

});