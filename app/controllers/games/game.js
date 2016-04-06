export default Ember.Controller.extend({
  gamesController: Ember.inject.controller('games'),
  games: Ember.computed.readOnly('gamesController.model'),
});
