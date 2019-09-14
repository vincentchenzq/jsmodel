import Model from "src/js-model/model";

export default new Model({
  id: 0,
  source: {
    type: Date,
    format: "l" // use manba date format, "l": "YYYY-MM-DD",
  },
  description: "",
  tags: [0],
  companyId: "",
  rate: {
    type: Number,
    default: 0.8 // use default value, only effective for String, Number, Date
  },
  salary: {
    type: Number,
    unit: Model.Q // money transfor, a unit of 1000
  }
});
