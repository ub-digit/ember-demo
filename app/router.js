import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
    this.resource('indexbouncer', function() {});
    this.resource('responser', function() {
	this.route('index', {path: '/'});
    });
    this.resource('backender', function() {
	this.route('index', {path: '/'});
	this.route('show', {path: '/:id'});
	this.route('new');
	this.route('edit', {path: '/edit/:id'});
    });
});

export default Router;
