import Ember from 'ember';

export default Ember.Controller.extend({
	emails: [{
		id: 0,
		read: false,
		title: "This is not spam"
	}, {
		id: 1,
		read: false,
		title: "Title"
	}, {
		id: 2,
		read: false,
		title: "Hello"
	}],
	actions: {
		searchForSubreddit(event) {
			event.preventDefault();
			let keywords = this.get('keywords');

			this.transitionToRoute('subreddits', keywords);

		},
		markAsRead(id) {
			console.log(this.emails[id].read);
		}
	}
});
