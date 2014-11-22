import Ember from 'ember';
import ENV from '../config/environment';

var TRANSLATIONS = {
    en: {
	other_lang: 'sv',
	main: {
	    title: "Ember Demo Application",
	    description: "Write description text here"
	},
	menu: {
	    responsive_demo: 'Responsive Demo',
	    backend_demo: 'API Service Demo',
	    other_lang: 'Svenska'
	},
	backend: {
	    action: {
		list: 'List posts',
		create: 'Create post',
		edit: 'Edit post',
		delete: 'Delete post',
		confirm_delete_msg: 'Are you sure you want to delete the post?'
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
		save: 'Save',
		save_error: 'Unable to save'
	    }
	}
    },
    sv: {
	other_lang: 'en',
	main: {
	    title: "Ember Demo-applikation",
	    description: "Skriv beskrivning här"
	},
	menu: {
	    responsive_demo: 'Demo av Responsivitet',
	    backend_demo: 'Demo mot Tjänste-API',
	    other_lang: 'English'
	},
	backend: {
	    action: {
		list: 'Lista poster',
		create: 'Skapa post',
		edit: 'Redigera post',
		delete: 'Radera post',
		confirm_delete_msg: 'Är du säker på att du vill radera posten?'
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
		save: 'Spara',
		save_error: 'Kunde inte spara'
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
	    Ember.I18n.translationInternal = true;
	}
	var translation = Ember.$.extend(true, {}, TRANSLATIONS)[lang];
	Ember.I18n.translations = translation;
	Ember.I18n.allTranslations = TRANSLATIONS;
	Ember.FEATURES.I18N_TRANSLATE_HELPER_SPAN = false;
	Ember.ENV.I18N_COMPILE_WITHOUT_HANDLEBARS = true;
    }
};
export default i18nInitializer;
