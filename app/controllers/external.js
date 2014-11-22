import Ember from 'ember';

export default Ember.Controller.extend({
    needs: ['application'],
    externalParamsBinding: 'controllers.application.externalParams',
    params: function() {
	var params = this.get('externalParams');
	return Ember.keys(params).map(function(item) {
	    return {key: item, value: params[item]};
	});
    }.property('externalParams')
});
