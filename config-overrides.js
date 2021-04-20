const { override, fixBabelImports, addLessLoader } = require('customize-cra');

module.exports = override(
  fixBabelImports("antd", {
    libraryDictionary: "es",
    style: true,
  }),
  addLessLoader({
    javascriptEnabled: true,
    // modifyVars: { "@primary-color": "#25b864" },
  })
)