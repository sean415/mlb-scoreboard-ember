import BaseAdapter from 'mlb-scoreboard-ember/adapters/base-adapter';

const GamesAdapter = BaseAdapter.extend({
  pathPrefix: 'scoreboard',
  find(store, type, date, snapshot) {
    return this.ajax(this.buildUrl(date));
  },
  query(store, type, params, snapshot) {
    return this.ajax(this.buildUrl(params.date));
  }

});

export default GamesAdapter;
