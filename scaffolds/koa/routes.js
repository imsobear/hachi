/**!
 * app routes
 *
 * Authors:
 *   大果 <liuxiong.lx@alibaba-inc.com>
 */

"use strict";

/**
 * Module dependencies.
 */
var common = require('./controller/common');


/**
 * Module exports
 */
module.exports = function (app) {

	app.get('/', common.index);
};
