import Ember from 'ember';

export default Ember.Controller.extend({
    langToggler: true,
    translationInternal: function() {
	return Ember.I18n.translationInternal;
    }.property(),
    actions: {
	toggleLang: function() {
	    var that = this;
	    var newLang = Ember.I18n.t('other_lang');
	    var newTranslation = Ember.$.extend(true, {}, Ember.I18n.allTranslations)[newLang];
	    Ember.I18n.translations = newTranslation;
	    Ember.run.later(function() {
		that.set('langToggler', false);
		Ember.run.later(function() {
		    that.set('langToggler', true);
		    that.transitionToRoute('indexbouncer');
		});
	    });
	}
    }
});
