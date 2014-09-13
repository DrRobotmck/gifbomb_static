Gifbomb.Collections.GifsCollection = Backbone.Collection.extend({
  apiBase: 'http://api.giphy.com/v1/gifs/search?q=',
  apiKey: '&api_key=dc6zaTOxFJmzC',
  buildQuery: function(queryString) {
    if (queryString) { 
      this.url = this.apiBase + escape(queryString) + this.apiKey; 
    }
    return this;
  },
  parse: function(response) {
    var parsedResponse = _.map(response.data, function(gifObject) {
      return {
        staticImage:gifObject.images.original_still.url,
        originalSize:gifObject.images.original.url,
        embedLink:gifObject.embed_url,
        giphyURL:gifObject.bitly_url,
        rating:gifObject.rating
      }
    });
    return parsedResponse;
  },
  model: Gifbomb.Models.GifModel

})