const { expect } = require('chai');
const processExists = require('process-exists');

const BrKill = require('../index');
const { ProcessName } = require('../lib');

const ERROR_MESSAGE_CHROME = 'killing process chrome failed: process doesn\'t exist';
const ERROR_MESSAGE_FIREFOX = 'killing process firefox failed: process doesn\'t exist';

/**
 * !!!!!WARNING!!!!!!
 * Running the test will kill the browser process
 */
describe('test kill browser process', () => {
  it('should kill chrome process', async () => {
    try  {
      await BrKill.chrome();
      const exists = await processExists(ProcessName.chrome());
      expect(exists).to.equal(false);
    } catch (err) {
      expect(err.message.toLowerCase().includes(ERROR_MESSAGE_CHROME)).to.equal(true);
    }
  });
  it('should kill firefox process', async () => {
    try  {
      await BrKill.firefox();
      const exists = await processExists(ProcessName.firefox());      
      expect(exists).to.equal(false);
    } catch (err) {
      expect(err.message.toLowerCase().includes(ERROR_MESSAGE_FIREFOX)).to.equal(true);
    }
  });
});
