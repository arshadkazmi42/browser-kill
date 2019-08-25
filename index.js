const fkill = require('fkill');

const { ProcessName, ProcessNameConstants } = require('process-name');


const chrome = async (force) => {
  const { BROWSERS: { CHROME } } = ProcessNameConstants;
  const procName = ProcessName.BROWSERS[CHROME][process.platform];
  return await fkill(procName, { force: force || true });
};


const firefox = async (force) => {
  const { BROWSERS: { FIREFOX } } = ProcessNameConstants;
  const procName = ProcessName.BROWSERS[FIREFOX][process.platform];
  return await fkill(procName, { force: force || true });
};


module.exports = {
  chrome,
  firefox
};
