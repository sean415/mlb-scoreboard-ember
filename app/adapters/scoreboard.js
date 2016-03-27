import BaseAdapter from 'mlb-scoreboard-ember/adapters/base-adapter';

const GamesAdapter = BaseAdapter.extend({

  pathPrefix: 'scoreboard',

  find (store, type, id, snapshot) {
    return this.ajax(this.buildUrl(id));
  }

});

export default GamesAdapter;
