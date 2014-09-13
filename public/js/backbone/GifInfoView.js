Gifbomb.Views.GifInfoView = Backbone.View.extend({
  el: '#main-view',
  model: new Gifbomb.Models.GifModel,
  initialize: function() {
    console.log("New Gif Info View");
    this.listenTo(this.model, "change", this.render);
    this.template = Handlebars.compile($('#full-info').html());
  },
  render: function() {
    console.log(this.model, 'updated')
    var compiledTemplate = this.template(this.model.toJSON());
    this.$el.html(compiledTemplate);
  }
})