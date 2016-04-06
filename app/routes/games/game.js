export default Ember.Route.extend({
  model(params, transition) {
    let id = transition.params.games.date + '-' + transition.params['games.game'].gameid;
    return this.store.findRecord('linescore', id);
  }
});
