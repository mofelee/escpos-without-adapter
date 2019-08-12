'use strict';
/**
 * Adapters
 */
exports.Console = require('./adapter/console');

/**
 * Printer Supports
 */
exports.Image    = require('./image');
exports.Printer  = require('./printer');
exports.Screen  = require('./screen');
exports.Adapter  = require('./adapter');
exports.command  = require('./commands');
exports.Printer2 = require('./promiseify');
