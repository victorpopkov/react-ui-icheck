const core = require('@actions/core');

class JestOutput {
  // eslint-disable-next-line class-methods-use-this
  onRunComplete(testContexts, results) {
    const totalTests = results?.numTotalTests || 0;
    core.setOutput('total', totalTests);

    const passedTests = results?.numPassedTests || 0;
    core.setOutput('passed', passedTests);
  }
}

module.exports = JestOutput;
