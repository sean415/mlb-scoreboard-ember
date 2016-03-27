// import moment from 'moment';

export default Ember.Component.extend({
  tagName: 'header',
  classNames: 'games-navigation-bar',
  layoutName: 'components/games-nav-bar',
  actions: {
    previous() {
      let prev = moment(this.get('currentDate')).subtract(1, 'd');
      return this.sendAction('action', prev);
    },
    next() {
      let next = moment(this.get('currentDate')).add(1, 'd');
      return this.sendAction('action', next);
    }
  }
});
