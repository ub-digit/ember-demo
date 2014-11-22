import Ember from 'ember';
import ENV from '../config/environment';

var TRANSLATIONS = {
    en: {
	menu: {
	    responsive_demo: 'Responsive Demo',
	    backend_demo: 'API Service Demo'
	},
	backend: {
	    action: {
		list: 'List posts',
		create: 'Create post',
		edit: 'Edit post',
		delete: 'Radera post'
	    },
	    item: {
		title: 'Title',
		summary: 'Summary',
		body: 'Content',
		link: 'Link',
	    },
	    form: {
		header: {
		    create: 'Create post',
		    edit: 'Edit post',
		    preview: 'Preview'
		},
		body: 'Content (markdown)',
		save: 'Save'
	    }
	}
    },
    sv: {
	menu: {
	    responsive_demo: 'Demo av Responsivitet',
	    backend_demo: 'Demo mot Tjänste-API'
	},
	backend: {
	    action: {
		list: 'Lista poster',
		create: 'Skapa post',
		edit: 'Redigera post',
		delete: 'Radera post'
	    },
	    item: {
		title: 'Titel',
		summary: 'Sammanfattning',
		body: 'Innehåll',
		link: 'Länk',
	    },
	    form: {
		header: {
		    create: 'Skapa post',
		    edit: 'Redigera post',
		    preview: 'Förhandsgranskning'
		},
		body: 'Innehåll (markdown)',
		save: 'Spara'
	    }
	}
    }
};

var i18nInitializer = {
    name: 'i18n',
    initialize: function() {
	console.log("DEBUG: ", ENV.APP.rootElement);
	var rootElement = Ember.$(ENV.APP.rootElement);
	var lang = rootElement.data().lang;
	if(!lang) {
	    lang = 'en';
	}
	Ember.I18n.translations = TRANSLATIONS[lang];
	Ember.FEATURES.I18N_TRANSLATE_HELPER_SPAN = false;
	Ember.ENV.I18N_COMPILE_WITHOUT_HANDLEBARS = true;
    }
};
export default i18nInitializer;
