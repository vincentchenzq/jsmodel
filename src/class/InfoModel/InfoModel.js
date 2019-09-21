import Model from 'src/js-model/model';

class InfoModel extends Model {
    parse(data) {
      let  b = super.parse(data);
      if(b.imgUrls.type.length == 0) {
         b.imgUrls.type.push('http://*****')
      }
      return b;
    }
  
    dispose(data, param) {
       return super.dispose(data, param)
    }
}

export default new InfoModel({
    imgUrls: {
      type: ['']
    },
  }); 