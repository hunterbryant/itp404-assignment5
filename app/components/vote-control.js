import Ember from 'ember';

export default Ember.Component.extend({
	actions: {
		increaseScore() {
			let newVal = this.get('score') + 1;
			this.get('onvote')(newVal);
		},
		decreaseScore() {
			let newVal = this.get('score') - 1;
			this.get('onvote')(newVal);
		}
	}
});
