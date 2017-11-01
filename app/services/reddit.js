import Ember from 'ember';
import $ from 'jquery';

export default Ember.Service.extend({
	findAllForSubreddit(subreddit) {
		let url = `https://www.reddit.com/r/${subreddit}.json`;
		return $.getJSON(url).then(function(results) {
			let returnArray = results.data.children.sort(function(a, b) {
				if (a.data.created < b.data.created) {
					return 1;
				} else {
					return -1;
				}
			});
			return returnArray;
		});
	}
});
