var Schema = {
  locations: {
    id: { type: 'increments', nullable:false, primary: true},
    lat: {type: 'string', nullable:false},
    lon: {type: 'string', nullable:false}
  }
};

module.exports = Schema;