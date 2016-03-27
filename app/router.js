import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('games', { resetNamespace: true}, function () {
    this.route('index', { path: '/' });
    this.route('day', { path: ':date' })
    this.route('game', {path: ':date/:gameid' });
  });
});

export default Router;
