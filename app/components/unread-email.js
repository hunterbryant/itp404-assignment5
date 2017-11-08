import Ember from 'ember';

export default Ember.Component.extend({
	actions: {
		readEmail() {
			this.attrs.readEmail(this.attrs.email.id);
			this.set('email.read', true);
		}
	}
});
