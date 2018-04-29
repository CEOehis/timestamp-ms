var moment = require('moment');

module.exports = {
  parseIsoTime: function parseIsoTime(iso) {
    var date = moment(iso)
    if(!_isValidDateObj(date)) {
      return { error: 'Invalid Date' }
    }
    var result = {
      unixtime: date.unix(),
      natural: moment(date).format('MMMM Do YYYY')
    }
    return result;
  },

  parseUnixTime: function parseUnixTime(iso) {
    if(typeof iso !== 'number') {
      throw Error('Invalid input');
    }
    var date = moment(iso)
    if (!_isValidDateObj(date)) {
      return { error: 'Invalid Date' }
    }
    var result = {
      unixtime: date.unix(),
      natural: moment(date).format('MMMM Do YYYY')
    }
    return result;
  }
}

function _isValidDateObj(date) {
  if(date.toString() === 'Invalid Date') {
    return false;
  }
  return true;
}