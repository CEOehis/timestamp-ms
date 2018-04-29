module.exports = {
  parseIsoTime: function parseIsoTime(iso) {
    var date = new Date(iso);
    if(!_isValidDateObj(date)) {
      return { error: 'Invalid Date' }
    }
    var result = {
      unixtime: date.getTime(),
      utc: date.toString()
    }
    return result;
  },

  parseUnixTime: function parseUnixTime(iso) {
    if(typeof iso !== 'number') {
      throw Error('Invalid input');
    }
    var date = new Date(iso);
    if (!_isValidDateObj(date)) {
      return { error: 'Invalid Date' }
    }
    var result = {
      unixtime: date.getTime(),
      utc: date.toString()
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