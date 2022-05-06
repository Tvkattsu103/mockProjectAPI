'use strict';

/**
 * email-sign-up service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::email-sign-up.email-sign-up');
