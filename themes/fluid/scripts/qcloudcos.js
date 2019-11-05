'use strict';
module.exports.qcloudcos = function (hexo) {
  console.log(hexo);
  var config = hexo.theme.config;
  if (!config.qcloudcos || !config.qcloudcos.enable) {
    return;
  }
  if (config.qcloudcos.onlypost) {
    hexo.extend.filter.register('after_post_render', function (data) {
      data.content = cosProcess.call(this, data.content);
      return data;
    });
  } else {
    hexo.extend.filter.register('after_render:html', function (str, data) {
      return cosProcess.call(this, str);
    });
  }
};

function cosProcess(htmlContent) {
  let cosImage = '\/\/' + config.qcloudcos.domain;
  return htmlContent.replace(/<img(\s*?)src="(.*?)"(.*?)>/gi, (str, p1, p2) => {
    return str.replace(p2, `${cosImage}${p2}`);
  });
}