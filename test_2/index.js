"use strict";

/**
 * The `test_data.json` contains an object array of "The Simpsons" characters and their catchphrase. This function
 * will add a new property `example` to each object that is a combining the `first_name`, `last_name`, and
 * `catchphrase` properties into a new sentence. The function should then only return the elements where
 * the last name is "Simpson".
 *
 * The new sentence should read like "Homer Simpson says Doh!".  See the `expected_output.json` file for the
 * expected results of this.
 *
 * @returns  {Object[]}
 */
module.exports = function test2() {
  const test1 = require("../test_1");
  const resultsFromTest1 = test1();
  const lastNameRequired = "Simpson";
  return resultsFromTest1.filter(result => result.last_name.includes(lastNameRequired));
  /**
   * For case insensitive comparison
   * return resultsFromTest1.filter(result => result.last_name.toLowerCase().includes(lastNameRequired.toLowerCase()))
   */

   /**
   * The ES5 way
   * return resultsFromTest1.filter(result => result.last_name.indexOf(lastNameRequired) !== -1);
   */
};
