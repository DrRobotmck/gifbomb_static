Gifbomb = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {}
}

$(function() {
  console.log('Loaded, bro');
  Gifbomb.Collections.gifCollection = new Gifbomb.Collections.GifsCollection;
  Gifbomb.Views.gifSearchView = new Gifbomb.Views.GifSearchView({collection: Gifbomb.Collections.gifCollection});
  Gifbomb.Views.gifListView = new Gifbomb.Views.GifListView({collection: Gifbomb.Collections.gifCollection});
  Gifbomb.Views.gifInfoView = new Gifbomb.Views.GifInfoView;

  Gifbomb.Collections.gifCollection.buildQuery('kitten').fetch({reset: true});

});