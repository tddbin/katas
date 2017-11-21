import assert from 'assert';
import sinon from 'sinon';
assert.calledWith = sinon.assert.calledWith;

import MetaData from './metadata.js';

describe('deployable meta data', function() {
  
  let metaData;
  let writeToFileDouble;
  const fileName = 'fileName';
  beforeEach(function() {
    writeToFileDouble = sinon.spy();
    metaData = new MetaData(writeToFileDouble);
  });
  
  it('uses the converter`s `to()` and writes the converted data', function() {
    const rawData = null;
    const conversionResult = [];
    const converter = {to: () =>  conversionResult};

    metaData
      .convertWith(rawData, converter)
      .writeToFile(fileName);
    
    assert.calledWith(writeToFileDouble, fileName, conversionResult);
  });
});
