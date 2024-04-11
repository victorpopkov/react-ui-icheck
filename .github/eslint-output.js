const core = require('@actions/core');

module.exports = (results) => {
  const summary = results.reduce(
    (result, value) => ({
      ...result,
      errors: result.errors + value.errorCount,
      warnings: result.warnings + value.warningCount,
    }),
    { errors: 0, warnings: 0 },
  );
  core.setOutput('issues', summary.errors + summary.warnings || 0);
};
