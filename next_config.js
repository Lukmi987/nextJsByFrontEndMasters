import {PHASAE_PRODUCTION_BUILD} from 'next/constants'
const nextEnv = require('next-env');
const dotenvLoad = require('dotenv-load');

dotenvLoad()

const withEnv = nextEnv();
module.exports = withEnv();
//** all that is being done for us with the plugins
// {
//  env: {
//    HELP_APP_URL: www.frontendmaster.com
//  }
// }
// */




// module.exports = {
//   // webpack: {
//   //   // it is gonna merge with webpack which nextjs uses
//   //
//   // }
//
// }

// const { PHASE_PRODUCTION_SERVER } = require('next/constants')
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
//
// module.exports = (phase, { defaultConfig }) => {
//   if (phase === PHASE_PRODUCTION_SERVER) {
//     return {
//       ...defaultConfig,
//       webpack: {
//         plugins: [new BundleAnalyzerPlugin()]
//       }
//     }
//   }
//
//   return defaultConfig
// }
//   in during a prod build of Next.js. You can check out all the different phases of Next.js.
//
//   Next.js is production-ready and handles almost everything, but don't be scared to reach to that config and extend what you need.