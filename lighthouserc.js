module.exports = {
  ci: {
    "onlyCategories": [
      "accessibility",
      "bestPractices",
      "performance",
      "seo",
    ],
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
      "staticDistDir": "./dist/webnuggets/browser/"
    }
  },
};