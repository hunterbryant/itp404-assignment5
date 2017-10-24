import Ember from 'ember';
import $ from 'jquery';

export default Ember.Route.extend({
	reddit: Ember.inject.service('reddit'),
	model(params) {
		return this.get('reddit').findAllForSubreddit(params.keywords);
	}
});
