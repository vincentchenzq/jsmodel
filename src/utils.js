import jsonFormat from "json-format";
// 获取json字符串
export const getInnerHTML = (obj) => {
    const config = {
      type: "space",
      size: 4
    };
    return jsonFormat(obj,config);
  }