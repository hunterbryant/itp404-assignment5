import Ember from 'ember';

export default Ember.Component.extend({
	originalScore: this.get('post.data.score'),
	actions: {
		changeScore(newVal) {
			this.set('post.data.score', newVal);
		}
	}
});
