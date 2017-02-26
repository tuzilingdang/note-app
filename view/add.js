"use strict";

APP.NoteNewView = Backbone.View.extend({
	events: {
		"click button.save" : 'save',
	},
	template:_.template($('#editTemplate').html()),

	render: function(){
		this.$el.html(
			this.template({notes: this.collection.toJSON()})
		);
		return this;
	},

	initialize: function(){

	},

	save: function(){
		this.model.set({
			title : this.$el.find('input[name=title]').val(),
			content: this.$el.find('textarea[name=content]').val()
		});

		if(this.model.isValid()){
			// this.model.save();
			console.log("this.model is valid");
			Backbone.history.navigate('note/index',{trigger:true});
		}
		else{
			console.log("this.model not valid");
		}
	},

	edit:function(){}

});