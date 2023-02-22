const core = require('@actions/core');

class JestOutput {
  // eslint-disable-next-line class-methods-use-this
  onRunComplete(testContexts, results) {
    const summary = results.coverageMap.getCoverageSummary();
    core.setOutput('coverage', `${summary.lines.pct}%` || '0%')
    core.setOutput('passed', results.numPassedTests || 0);
    core.setOutput('total', results.numTotalTests || 0);
  }
}

module.exports = JestOutput;
