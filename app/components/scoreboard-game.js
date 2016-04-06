const STATUS_MAP = {
  'final': 'F',
  'game over': 'F',
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

  willInsertElement() {
    this._super(...arguments);
    // this.synthesizeProperties();
  },

  gameInProgress: Ember.computed.equal('model.status', 'In Progress'),

  inningOrStatus: Ember.computed('model.inning', 'model.status', function() {
    let status = this.get('model.status'),
        inning = this.get('model.inning');

    return status === 'In Progress' ? inning : STATUS_MAP[status.toLowerCase()];
  }),

  inningHalf: Ember.computed('model.top_inning', 'gameInProgress', function() {
    let inProgress = this.get('gameInProgress'),
        topInning = this.get('model.top_inning');
    if(!inProgress) { return ''; }
    return topInning === 'Y' ? 'top' : topInning === 'N' ? 'bottom' : '';
  }),

  hasRunnerOnFirstClass: Ember.computed('model.runner_on_1b', function() {
    return this.get('model.runner_on_1b') ? 'hasrunner' : null;
  }).volatile(),

  hasRunnerOnSecondClass: Ember.computed('model.runner_on_2b', function() {
    return this.get('model.runner_on_2b') ? 'hasrunner' : null;
  }).volatile(),

  hasRunnerOnThirdClass: Ember.computed('model.runner_on_3b', function() {
    return this.get('model.runner_on_3b') ? 'hasrunner' : null;
  }).volatile(),

  modelChanged: (function() {
    this.rerender();
  }).observes('model'),

  synthesizeProperties() {
    function createProperty(name, prop) {
      Ember.defineProperty(this, name, Ember.computed(prop, () => {
        return this.get(prop) ? 'hasrunner' : '';
      }));
    }
    ['hasRunnerOnFirst', 'hasRunnerOnSecond', 'hasRunnerOnThird'].forEach((prop) => {
      createProperty.call(this, `${prop}Class`, prop);
    });
  },
  click() {
    this.sendAction('action', this.get('model.id'));
  }
});
