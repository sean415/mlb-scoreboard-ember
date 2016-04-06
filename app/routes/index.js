import moment from 'moment';

export default Ember.Route.extend({
  redirect() {
    return this.replaceWith('games', moment(new Date()).format('YYYY-MM-DD'));
  }
});
