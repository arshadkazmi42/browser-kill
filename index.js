const fkill = require('fkill');

const { ProcessName } = require('./lib');


const chrome = async (force) => {
  const procName = ProcessName.chrome();
  return await fkill(procName, { force: force || true });
};


const firefox = async (force) => {
  const procName = ProcessName.firefox();
  return await fkill(procName, { force: force || true });
};


module.exports = {
  chrome,
  firefox
};
