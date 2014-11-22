import Ember from 'ember';

export default Ember.Route.extend({
    model: function(params) {
	return this.store.find('demo', params.id);
    },
    actions: {
	removeItem: function(item) {
	    if(confirm(Ember.I18n.t('backend.action.confirm_delete_msg'))) {
		var that = this;
		this.store.destroy('demo', item.id).then(function() {
		    that.transitionTo('backender.index');
		});
	    }
	}
    }
});
