"use strict";

/**
 * The `test_data.json` contains an object array of "The Simpsons" characters and their catchphrase. This function
 * will add a new property `example` to each object that is a combining the `first_name`, `last_name`, and
 * `catchphrase` properties into a new sentence.
 *
 * The new sentence should read like "Homer Simpson says Doh!".  See the `expected_output.json` file for the
 * expected results of this.
 *
 * @returns  {Object[]}
 */
module.exports = function test1() {
  const records = require("./test_data.json");
  return records.map(record => {
    return {
      ...record,
      example: `${record.first_name} ${record.last_name} says ${record.catchphrase}`,
    };
  });
  // let results;

  // Write your code here.  The pre-written lines above and below are just suggestions, feel free to delete
  // them and start fresh.

  // return results;
};

