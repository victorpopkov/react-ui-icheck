module.exports = function (results) {
  const summary = results.reduce(
    function (seq, current) {
      seq.errors += current.errorCount;
      seq.warnings += current.warningCount;
      return seq;
    },
    { errors: 0, warnings: 0 },
  );

  return summary.errors > 0 || summary.warnings > 0
    ? `Issues: summary.errors + summary.warnings`
    : 'Issues: 0';
};
