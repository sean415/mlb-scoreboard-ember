import Ember from 'ember';
import moment from 'moment';

export default Ember.Route.extend({
  model (params, transition) {
    return this.store.query('game', { date: transition.params.games.date });
  },

  afterModel (model, transition) {
    this.set('currentDate', transition.params.games.date);
    this.controllerFor('games').set('currentDate', transition.params.games.date);
  },

  setupController(controller, model) {
    controller.set('currentDate', moment(this.get('currentDate')));
    this._super(...arguments);
  },

  actions: {
    changeDay(day) {
      this.transitionTo('games', moment(day).format('YYYY-MM-DD'));
    },
    refreshData() {
      this.refresh();
    },
    showGameDetails(id) {
      id = id.split('/').pop();
      this.transitionTo('games.game', id);
    }
  }
});
