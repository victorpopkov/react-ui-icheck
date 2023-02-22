const core = require('@actions/core');
const { promisify } = require('util');
const exec = promisify(require('child_process').exec);

const getNrOfIssues = async (extension) => {
  let result = {};

  try {
    result = await exec(`prettier --check './**/*.${extension}'`);
  } catch (error) {
    result.stderr = error.stderr;
  }

  if (result.stderr.length > 0) {
    return result.stderr.trim().split(/\r\n|\r|\n/).length - 1;
  }

  return 0;
};

const run = async () => {
  const md = (await getNrOfIssues('md')) || 0;
  const yml = (await getNrOfIssues('yml')) || 0;

  return {
    total: md + yml,
    md,
    yml,
  };
};

run().then((result) => {
  core.setOutput('prettier-issues', result.total);
  core.setOutput('prettier-issues-md', result.md);
  core.setOutput('prettier-issues-yml', result.yml);
});
