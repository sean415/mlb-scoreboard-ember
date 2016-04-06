export default Ember.Route.extend({
  model(params, transition) {
    let id = transition.params['games.day'].date + '-' + transition.params['games.day.game'].gameid;
    return this.store.findRecord('linescore', id);
  }
});
