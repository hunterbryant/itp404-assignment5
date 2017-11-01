import Ember from 'ember';

export default Ember.Component.extend({
	actions: {
		changeScore(newVal) {
			this.set('post.data.score', newVal);
		}
	}
});
