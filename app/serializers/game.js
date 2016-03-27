import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  normalizeQueryResponse(store, primaryModelClass, payload, id, requestType) {
    let games = payload.data.games.game || [];
    if(games.length === undefined) {
      games = [ games ];
    }
    let data = { games: games };
    return this._super(store, primaryModelClass, data, id, requestType);
  }
});
