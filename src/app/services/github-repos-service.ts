/**
 *  'http://api.github.com/users/calleboketoft/repos'
 * Basic idea:
 * - make call using angular 2 http module
 * - save response in localStorage
 * - if reloading the page, check if the response is stored, then use it
 * - set a timestamp in localStorage
 * - if the result is more than 1 minute old, fetch again.
 */
