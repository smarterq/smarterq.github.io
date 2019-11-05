'use strict';
module.exports.lazyload = function (hexo) {
  var config = hexo.theme.config;
  if (!config.lazyload || !config.lazyload.enable) {
    return;
  }
  if (config.lazyload.onlypost) {
    hexo.extend.filter.register('after_post_render', function (data) {
      data.content = lazyProcess.call(this, data.content);
      return data;
    });
  } else {
    hexo.extend.filter.register('after_render:html', function (str, data) {
      return lazyProcess.call(this, str);
    });
  }
  qcloudcos(hexo);
};

function lazyProcess(htmlContent) {
  let loadingImage = '/img/loading.gif';
  return htmlContent.replace(/<img(\s*?)src="(.*?)"(.*?)>/gi, (str, p1, p2) => {
    if (/srcset=/gi.test(str)) {
      return str;
    }
    return str.replace(p2, `${p2}" srcset="${loadingImage}`);
  });
}

var qcloudcos = function (hexo) {
  var config = hexo.theme.config;
  if (!config.qcloudcos || !config.qcloudcos.enable) {
    return;
  }
  if (config.qcloudcos.onlypost) {
    hexo.extend.filter.register('after_post_render', function (data) {
      data.content = cosProcess.call(this, data.content, config);
      return data;
    });
  } else {
    hexo.extend.filter.register('after_render:html', function (str, data) {
      return cosProcess.call(this, str, config);
    });
  }
};

function cosProcess(htmlContent, config) {
  let cosImage = '\/\/' + config.qcloudcos.domain;
  return htmlContent.replace(/<img(\s*?)src="(.*?)"(.*?)>/gi, (str, p1, p2) => {
    console.log(p2);
    return str.replace(p2, `${cosImage}${p2}`);
  });
}