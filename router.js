"use strict";

window.APP = window.APP || {};

APP.NoteRouter = Backbone.Router.extend({
	routes:{
		"note/new": "create"
		// "note/del": "delete",
		// "note/edit": "edit"
	},

	$container: $('#content'),

	initialize: function(){
		this.collection = new APP.NoteCollection();
		this.index();
		Backbone.history.start();
	},

	navigate: function(addr,trigger){
		return this.navigate(addr,trigger)
	},

	index:function(){
		var view = new APP.NoteIndexView({
			collection: this.collection 
		});
		this.$container.html(view.render().el);
	},

	create:function(){
		var view = new APP.NoteNewView({
			collection : this.collection,
			model: new APP.NoteModel()
		});	
		this.$container.html(view.render().el);
	}
});
