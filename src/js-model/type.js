import Utils from './utils';
const TYPE = {
  STRING: String,
  DATE: Date,
  NUMBER: Number,
  BOOLEAN: Boolean,
  OBJECT: Object,
  ARRAY: Array,
  isType(data) {
    return (
      data === this.STRING ||
      data === this.DATE ||
      data === this.NUMBER ||
      data === this.BOOLEAN
    );
  },
  S: 10,
  B: 100,
  Q: 1000,
  W: 10000,
  SW: 100000,
  BW: 1000000,
  QW: 10000000,
  Y: 100000000,
};
Utils.deepFreeze(TYPE);
export default TYPE;
