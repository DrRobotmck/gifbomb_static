Gifbomb.Views.GifResultView = Backbone.View.extend({
  className: 'gif-result',
  initialize: function() {
    console.log('New Gif Result View');
    this.template = Handlebars.compile($('#single-result').html());
    this.render();
  },
  render: function() {
    var compiledTemplate = this.template(this.model.toJSON());
    this.$el.html(compiledTemplate);
  },
  events: {
    'click': 'renderInfoView'
  },
  renderInfoView: function() {
    Gifbomb.Views.gifInfoView.model.set(this.model.toJSON());
    console.log(Gifbomb.Views.gifInfoView)
  }
})