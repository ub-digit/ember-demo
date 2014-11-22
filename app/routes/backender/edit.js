import Ember from 'ember';

export default Ember.Route.extend({
    model: function(params) {
	return this.store.find('demo', params.id);
    },
    setupController: function(controller, model) {
	controller.set('model', model);
	controller.set('error', false);
    },
    actions: {
	saveItem: function(item) {
	    var that = this;
	    this.store.save('demo', item).then(function(newModel) {
		that.controller.set('model', newModel);
		that.transitionTo('backender.show', newModel.id);
	    },function() {
		that.controller.set('error', true);
	    });
	}
    }
});
