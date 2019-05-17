var path = require('path');

module.exports = {
    modify: (config, { target, dev }, webpack) => {
        config.resolve.modules.unshift(path.resolve(__dirname, './src'));
  
      return config;
    },
  };