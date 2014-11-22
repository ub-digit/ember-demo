import Ember from 'ember';
import ENV from '../config/environment';

export default Ember.Route.extend({
    setupController: function(controller, model) {
	controller.set('model', model);
	var rootElement = Ember.$(ENV.APP.rootElement);
	controller.set('externalParams', rootElement.data());
    }
});
