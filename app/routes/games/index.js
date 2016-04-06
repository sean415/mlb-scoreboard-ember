import Ember from 'ember';

const GamesForDateRoute = Ember.Route.extend({
  model (params, transition) {
    var _this = this;
    return this.store.query('game', { date: transition.params.games.date });
  },

  afterModel (model, transition) {
    this.controllerFor('games').set('currentDate', transition.params.games.date);
  }
});

export default GamesForDateRoute;
