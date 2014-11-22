import Ember from 'ember';

export default Ember.Route.extend({
    beforeModel: function() {
	var that = this;
	Ember.run.later(function() {
	    that.transitionTo('index');
	});
    }
});
