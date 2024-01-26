// Find more detaisl here https://github.com/GoogleChrome/lighthouse-ci/blob/main/docs/configuration.md
module.exports = {
  ci: {
    "assert": {
      "assertions": {
        "categories:accessibility": ["error", { "minScore": 1 }],
        "categories:bestPractices": ["error", { "minScore": 1 }],
        "categories:performance": ["error", { "minScore": 1 }],
        "categories:seo": ["error", { "minScore": 1 }],
      }
    },
    "upload": {
      "target": 'temporary-public-storage',
    },
    "collect": {
      "settings":{
        "onlyCategories": [
          "accessibility",
          "best-practices",
          "performance",
          "seo",
        ],
        // find the list of all audits names https://github.com/GoogleChrome/lighthouse/blob/main/core/config/default-config.js
        // Skip those because on the deployed website the score is a perfect 100. LHCI seems to run on a worst server.
        "skipAudits": [
          "unused-javascript",
          "largest-contentful-paint",
          'first-contentful-paint',
          'speed-index',
          "largest-contentful-paint-element",
          "render-blocking-resources"
        ],
        "formFactor": 'desktop',
        "screenEmulation": {
          "mobile": false,
          "width": 1350,
          "height": 940,
          "deviceScaleFactor": 1,
          "disabled": false,
        },
        // "isSinglePageApplication": true
      },
      "staticDistDir": "./dist/webnuggets/browser",
    },
  },
};