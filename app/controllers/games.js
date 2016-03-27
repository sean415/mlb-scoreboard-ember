import Ember from 'ember';

const ScoreboardController = Ember.Controller.extend({
  currentDate: null,

  actions: {
    nextDay() {
      return this.transitionTo('games', this.getNextDate());
    },

    previousDay() {
      return this.transitionTo('games', this.getPreviousDate());
    }
  }

});

export default ScoreboardController;
