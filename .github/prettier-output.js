const core = require('@actions/core');
const { promisify } = require('util');
const exec = promisify(require('child_process').exec);

const getNrOfIssues = async () => {
  let result = {};

  try {
    result = await exec(`prettier --check .`);
  } catch (error) {
    result.stderr = error.stderr;
  }

  if (result.stderr.length > 0) {
    return result.stderr.trim().split(/\r\n|\r|\n/).length - 1;
  }

  return 0;
};

const run = async () => ({
  total: (await getNrOfIssues()) || 0,
});

run().then((result) => {
  core.setOutput('issues', result.total);
});
