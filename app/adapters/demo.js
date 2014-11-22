import Ember from 'ember';
import ENV from '../config/environment';

export default Ember.Object.extend({
    endpoints: {
	demo:	{ path: 'demos'	}
    },
    findOne: function(name, id, params) {
	var that = this;
	return this.fetch(this.urlOne(name, id, params))
	    .then(function(data) {
		return that.extractOne(name, data);
	    }, this.extractErrors);
    },
    findMany: function(name, params) {
	var that = this;
	return this.fetch(this.urlMany(name, params))
	    .then(function(data) {
		return that.extractMany(name, data);
	    }, this.extractErrors);
    },
    fetch: function(url) {
	return Ember.$.ajax({
	    url: url,
	    method: 'get',
	    crossDomain: true,
	    type: 'json',
	});
    },
    send: function(url, method, data) {
	return Ember.$.ajax({
	    url: url,
	    method: method,
	    crossDomain: true,
	    type: 'json',
	    data: data,
	});
    },
    sendDelete: function(url) {
	return Ember.$.ajax({
	    url: url,
	    method: 'delete',
	    crossDomain: true,
	    type: 'json',
	});
    },
    endpoint: function(name) {
	if(this.endpoints[name]) {
	    return this.endpoints[name];
	} else {
	    console.log("ERROR! Missing endpoint for", name);
	    return undefined;
	}
    },
    plural: function(name) {
	if(this.endpoint(name) && this.endpoint(name).plural) {
	    return this.endpoint(name).plural;
	} else {
	    return name+'s';
	}
    },
    singular: function(name) {
	if(this.endpoint(name) && this.endpoint(name).singular) {
	    return this.endpoint(name).singular;
	} else {
	    return name;
	}
    },
    urlOne: function(name, id, params) {
	var url = ENV.APP.serviceURL + '/' + this.endpoint(name).path + '/' + id;
	if(params) {
	    url += '?' + Ember.$.param(params);
	}
	return url;
    },
    urlMany: function(name, params) {
	var url = ENV.APP.serviceURL + '/' + this.endpoint(name).path;
	if(params) {
	    url += '?' + Ember.$.param(params);
	}
	return url;
    },
    extractOne: function(name, data) {
	var singularName = this.singular(name);
	data[singularName].meta = data.meta;
	data[singularName].errors = this.extractErrors(data);
	return data[singularName];
    },
    extractMany: function(name, data) {
	var pluralName = this.plural(name);
	var list = data[pluralName];
	list.meta = data.meta;
	list.errors = this.extractErrors(data);
	return list;
    },
    extractErrors: function(reason_or_data) {
	if(reason_or_data.responseJSON) {
	    return {
		errors: reason_or_data.responseJSON.errors,
		status: reason_or_data.status
	    };
	} else {
	    return reason_or_data.errors;
	}
	return undefined;
    },
    destroy: function(name, id) {
	return this.sendDelete(this.urlOne(name, id));
    },
    saveUpdate: function(name, id, data) {
	var that = this;
	var dataObject = {};
	dataObject[name] = data;
	return this.send(this.urlOne(name, id), 'put', dataObject)
	    .then(function(data) {
		return that.extractOne(name, data);
	    }, this.extractErrors);
    },
    saveCreate: function(name, data) {
	var that = this;
	var dataObject = {};
	dataObject[name] = data;
	return this.send(this.urlMany(name), 'post', dataObject)
	    .then(function(data) {
		return that.extractOne(name, data);
	    }, this.extractErrors);
    }
});
