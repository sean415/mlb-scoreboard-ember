import Ember from 'ember';

export default Ember.Controller.extend({
  currentDate: null,
  gamesInProgress: Ember.computed('model', function() {
    let totalGames = this.get('model.length');
    let finishedGames = this.get('model').filter(function(game) {
      let status = game.get('status');
      return /final|postponed|cancelled/i.test(status);
    });
    return finishedGames.length < totalGames;
  }),

  setPolling() {
    if(this.get('gamesInProgress')) {
      setTimeout(() => {
        this.send('refreshData');
      }, 10000);
    }
  },
  modelChanged: (function() {
    this.setPolling();
  }).observes('model'),
});
