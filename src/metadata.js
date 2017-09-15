export default class MetaData {
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

