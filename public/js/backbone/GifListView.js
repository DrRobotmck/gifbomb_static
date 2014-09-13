Gifbomb.Views.GifListView = Backbone.View.extend({
  el: '#results',
  initialize: function() {
    console.log('new Gif List View');
    this.listenTo(this.collection, 'reset', this.addAll);
  },
  addAll: function() {
    this.$('.gif-result').remove();
    this.collection.each(this.addOne, this);
  },
  addOne: function(gif) {
    var gifResultView = new Gifbomb.Views.GifResultView({model: gif});
    this.$el.prepend(gifResultView.el); 
  }
})