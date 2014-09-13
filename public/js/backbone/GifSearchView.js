Gifbomb.Views.GifSearchView = Backbone.View.extend({
  el: '#search',
  initialize: function() {
    console.log('New Search View');
  },
  events: {
    'click #enter':'newSearchRequest'
  },
  newSearchRequest: function() {
    var searchTerm = this.$('#user-input');
    this.collection.buildQuery(searchTerm.val());
    searchTerm.val('');
    this.collection.fetch({reset:true});
  }

})