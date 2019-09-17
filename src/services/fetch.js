export default function fetch({ method, url }) {
  //创建xhr对象
  var xhr;
  if (window.XMLHttpRequest) {
    xhr = new XMLHttpRequest();
  } else {
    xhr = new ActiveXObject('Microsoft.XMLHTTP');
  }
  //发送请求
  xhr.open(method, url, true);
  xhr.send(); //异步接受响应
  return new Promise(resolve => {
    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4 && xhr.status == 200) {
        //实际操作
        resolve(JSON.parse(xhr.responseText));
      }
    };
  });
}
