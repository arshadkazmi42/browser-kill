const os = require('os');

const Constants = require('./constants');


const chrome = () => {
  if (os.platform() === 'win32') {
    return Constants.WINDOWS.CHROME;
  }

  if (os.platform() === 'darwin') {
    return Constants.MACOS.CHROME;
  }

  return Constants.LINUX.CHROME;
};


const firefox = () => {
  if (os.platform() === 'win32') {
    return Constants.WINDOWS.FIREFOX;
  }

  if (os.platform() === 'darwin') {
    return Constants.MACOS.FIREFOX;
  }

  return Constants.LINUX.FIREFOX;
};


module.exports = {
  chrome,
  firefox
};
