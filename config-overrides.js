const { setWebpackTarget, override, addBabelPresets, addBabelPlugins } = require("customize-cra");

module.exports = override(
   setWebpackTarget(['web', 'es5']),

   addBabelPresets(
      [
         "@babel/preset-env",
         {
            "targets": {"ie": "11"}, 
            corejs: 3,
         },
         
      ],
      
      
   ),

   addBabelPlugins(
      [
         [
           '@babel/plugin-transform-runtime',
           {
             "corejs": 3,
           },
         ]
      ]
   )

)