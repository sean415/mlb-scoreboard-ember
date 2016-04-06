import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  normalize(modelClass, payload, prop) {
    // because these properties aren't always returned in the request,
    // we have to ensure they're reset
    payload.runner_on_1b = payload.runner_on_1b || false;
    payload.runner_on_2b = payload.runner_on_2b || false;
    payload.runner_on_3b = payload.runner_on_3b || false;
    return this._super(modelClass, payload, prop);
  },

  normalizeQueryResponse(store, primaryModelClass, payload, id, requestType) {
    let games = payload.data.games.game || [];
    if(games.length === undefined) {
      games = [ games ];
    }
    let data = { games: games };
    return this._super(store, primaryModelClass, data, id, requestType);
  }
});
