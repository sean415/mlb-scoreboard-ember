import BaseAdapter from 'mlb-scoreboard-ember/adapters/base-adapter';

export default BaseAdapter.extend({
  pathPrefix: 'linescore',
  getDateParts(date) {
    return date;
  },
  findRecord(store, type, id, snapshot) {
    // convert date in form of YYYY-MM-DD to YYYY/MM/DD
    id = id.replace(/((\d)\-)/g, '$2/');
    return this.ajax(this.buildUrl(id));
  }
});
