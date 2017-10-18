import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		searchForSubreddit(event) {
			event.preventDefault();
			let keywords = this.get('keywords');

			this.transitionToRoute('subreddits', keywords);

		}
	}
});
