export default Ember.Controller.extend({
  gamesController: Ember.inject.controller('games'),
  currentDate: Ember.computed.readOnly('gamesController.currentDate')
});
