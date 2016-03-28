export default Ember.Component.extend({
  classNames: ['scoreboard-games', 'games'],
  layoutName: 'components/scoreboard',
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
      let timeout = setInterval(() => {

        this.sendAction('refreshRoute');
      }, 3000);
      this.set('polling', timeout);
    } else {
      this.cancelPolling(this.get('polling'));
    }
  },

  cancelPolling() {
    clearInterval(this.get('polling'));
  },

  willInsertElement() {
    this._super();
    this.setPolling();
  },

  willDestroyElement() {
    this._super();
    this.cancelPolling();
  }
});
