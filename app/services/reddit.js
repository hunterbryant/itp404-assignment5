import Ember from 'ember';

export default Ember.Service.extend({
	findAllForSubreddit(subreddit) {
		console.log(subreddit);
		let url = `https://www.reddit.com/r/${subreddit}.json`;
		return $.getJSON(url).then(function(results) {
			return results.data.children;
		});
	}
});
