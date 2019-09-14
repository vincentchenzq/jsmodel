import Model from "src/js-model/model";
import Basic from "src/class/Basic";

export default new Model({
  a: {
    b: {
      c: [],
      d: {
        type: String,
        default: ""
      }
    },
    e: [Basic, Basic]
  }
});
