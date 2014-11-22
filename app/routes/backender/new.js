import EditRoute from '../backender/edit';

export default EditRoute.extend({
    model: function() {
	return {};
    },
    setupController: function(controller, model) {
	controller.set('model', model);
    }
});
