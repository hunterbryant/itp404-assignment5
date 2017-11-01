import Ember from 'ember';

export default Ember.Route.extend({
	reddit: Ember.inject.service('reddit'),
	model(params) {
		return this.get('reddit').findAllForSubreddit(params.keywords);
	}
});
