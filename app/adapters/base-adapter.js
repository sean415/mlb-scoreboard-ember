const BaseAdapter = DS.RESTAdapter.extend({
  host: 'http://localhost:4567',
  pathPrefix: '',
  getDateParts (date) {
    return date.split('-').join('/')
  },

  buildUrl (date, id) {
    let baseurl = [
      this.get('host'),
      this.get('pathPrefix'),
      this.getDateParts(date)
    ].join('/');

    if(id) {
      baseurl += '/' + id;
    }

    return baseurl;

  }

});

export default BaseAdapter;
