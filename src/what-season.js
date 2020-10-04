const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (typeof(date) === 'undefined') return 'Unable to determine the time of year!';
  if (date instanceof Date && isNaN(date.valueOf())) throw new Error();

  switch (date.getMonth() + 1) {
    case 12:
    case 1:
    case 2:
      return 'winter';
    case 3:
    case 4:
    case 5:
      return 'spring';
    case 6:
    case 7:
    case 8:
      return 'summer';
    case 9:
    case 10:
    case 11:
      return 'autumn';
    default:
      return 'Unable to determine the time of year!';
  }
};
