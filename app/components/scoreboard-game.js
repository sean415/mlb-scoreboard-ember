const STATUS_MAP = {
  'final': "F",
  "postponed": 'P',
  "rain": 'R',
  'cancelled': 'C'
};

export default Ember.Component.extend({
  tagName: 'article',
  classNames: ['game', 'scoreboard-game'],
  layoutName: 'components/scoreboard-game',
  hasRunnerOnFirst: Ember.computed.bool('model.runner_on_1b'),
  hasRunnerOnSecond: Ember.computed.bool('model.runner_on_2b'),
  hasRunnerOnThird: Ember.computed.bool('model.runner_on_3b'),
  numberOfOuts: Ember.computed('model.outs', 'model.status', function() {
    let outs = this.get('model.outs'),
        status = this.get('model.status');
    if(status !== 'In Progress') { return ''; }
    if(!outs) { return; }
    return outs === "1" ? 'one' : outs === "2" ? 'two' : outs === "3" ? 'three' : '';
  }),

  gameInProgress: Ember.computed.equal('model.status', 'In Progress'),

  inningOrStatus: Ember.computed('model.inner', 'model.status', function() {
    let status = this.get('model.status'),
        inning = this.get('model.inning');

    return status === 'In Progress' ? inning : STATUS_MAP[status.toLowerCase()];
  }),

  inningHalf: Ember.computed('model.top_inning', 'gameInProgress', function() {
    let inProgress = this.get('gameInProgress'),
        topInning = this.get('model.top_inning');
    if(!inProgress) { return ''; }
    return topInning === 'Y' ? 'top' : topInning === 'N' ? 'bottom' : '';
  })
});
