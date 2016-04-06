import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  normalizeFindRecordResponse(store, primaryModelClass, payload, id, requestType) {
    id = 'linescore_' + payload.data.game.id.replace(/\/|-/g, '_');
    payload.data.game.id = id;
    return this._super(store, primaryModelClass, { linescore: payload.data.game }, id, requestType);
  }
});
