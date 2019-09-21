import Model from 'src/js-model/model';

export default new Model({
  salary: {
    type: Number,
    parse(data) {
      return data.salary / 1000;
    },
    dispose(data) {
      return data.salary * 1000;
    },
  },
});
