'use strict';
let axios = require('axios');
let httpUrl = "https://api.apiopen.top/getJoke";

exports.main = async (event, context) => {
  let result = await axios.get(httpUrl, { params:event })
  return result.data;
};