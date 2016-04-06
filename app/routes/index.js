import moment from 'moment';

export default Ember.Route.extend({
  redirect() {
    return this.replaceWith('games.day', moment(new Date()).format('YYYY-MM-DD'));
  }
});
