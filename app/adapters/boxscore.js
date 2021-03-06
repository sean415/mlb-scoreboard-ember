import BaseAdapter from 'mlb-scoreboard-ember/adapters/base-adapter';

export default BaseAdapter.extend({
  pathPrefix: 'boxscore',
  getDateParts(date) {
    return date;
  },
  findRecord(store, type, id, snapshot) {
    id = id.replace(/((\d)\-)/g, '$2/');
    return this.ajax(this.buildUrl(id));
  },
  query(store, type, params, snapshot) {
    return this.ajax(this.buildUrl(params.date));
  }

});
