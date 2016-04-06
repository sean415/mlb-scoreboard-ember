export default Ember.Component.extend({
  classNames: ['scoreboard-games', 'games'],
  layoutName: 'components/scoreboard',
  modelChanged: (function() {
    this.rerender();
  }).observes('model'),
  actions: {
    showGameDetails(id) {
      this.sendAction('action', id);
    }
  }
});
