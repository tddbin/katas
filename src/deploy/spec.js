import assert from 'assert';
import sinon from 'sinon';
assert.calledWith = sinon.assert.calledWith;

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

class MetaData {
  constructor(writeToFile) {
    this._writeToFile = writeToFile;
    this._rawData = null;
  }
  cloneAndInitWithRawData(rawData) {
    var clone = new MetaData(this._writeToFile);
    clone._rawData = rawData;
    return clone;
  }
  convertWith(rawData, converter) {
    return this.cloneAndInitWithRawData(converter.to(rawData));
  }
  writeToFile(fileName) {
    this._writeToFile(fileName, this._rawData);
  }
}