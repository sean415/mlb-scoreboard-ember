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
  })
});
