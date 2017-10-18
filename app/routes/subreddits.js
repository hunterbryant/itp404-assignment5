import Ember from 'ember';
import $ from 'jquery';

export default Ember.Route.extend({
	model(params) {
		let keywords = params.keywords;
		let url = `https://www.reddit.com/r/${keywords}.json`;
		return $.getJSON(url).then(function(results) {
			return results.data.children;
		});
	}
});
