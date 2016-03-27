import Ember from 'ember';

const GameController = Ember.Controller.extend({

  gameStatus: Ember.computed.alias('model.status'),

});

export default GameController;
